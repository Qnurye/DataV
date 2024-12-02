<template>
  <div
    v-if="visible"
    class="w-[400px] fixed bottom-4 right-4 p-4 rounded-lg shadow backdrop-filter backdrop-blur-lg bg-white bg-opacity-40 z-40"
  >
    <div class="flex justify-between items-center mb-2">
      <h2 class="text-xl font-semibold">问问 AI</h2>
      <button @click="toggleVisibility" class="text-red-500">
        <X />
      </button>
    </div>
    <textarea
      v-model="question"
      placeholder="问问什么..."
      class="w-full p-2 mt-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
      rows="4"
    ></textarea>
    <div class="flex justify-between items-center mt-1 text-sm text-gray-500">
      <span>{{ question.length }}/200</span>
      <button
        @click="askAi"
        class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 flex items-center justify-center"
        :disabled="loading || question.length === 0"
      >
        <span v-if="loading" class="loader"></span>
        <span v-else><send-horizonal /></span>
      </button>
    </div>
    <div v-if="displayedAnswer" class="mt-4 p-4 border rounded bg-gray-100 shadow-inner">
      <message-square-quote class="text-blue-600 mb-2" />
      <div v-html="renderMarkdown(displayedAnswer)" class="displayed-answer prose prose-sm"></div>
    </div>
  </div>
  <button
    v-else
    @click="toggleVisibility"
    class="fixed bottom-4 right-4 p-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md transition duration-300"
  >
    <bot-message-square />
  </button>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { askAiQuestion, createAiConversation } from '@/api/ai'
import { BotMessageSquare, MessageSquareQuote, SendHorizonal, X } from 'lucide-vue-next'
import { marked } from 'marked'

const question = ref('')
const answer = ref('')
const displayedAnswer = ref('')
const visible = ref(false)
const loading = ref(false)

const askAi = async () => {
  if (question.value.trim()) {
    loading.value = true
    answer.value = await askAiQuestion(question.value, (await createAiConversation()))
    loading.value = false
  }
}

const toggleVisibility = async () => {
  visible.value = !visible.value
}

watch(answer, (newAnswer) => {
  displayedAnswer.value = ''
  let index = 0
  const typeWriter = () => {
    if (index < newAnswer.length) {
      displayedAnswer.value += newAnswer.charAt(index)
      index++
      setTimeout(typeWriter, 50)
    }
  }
  typeWriter()
})

const renderMarkdown = (text: string) => {
  return marked(text)
}
</script>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

ul {
  list-style-position: inside;
  list-style-type: disc;
}

ol {
  list-style-position: inside;
  list-style-type: decimal;
}
</style>
