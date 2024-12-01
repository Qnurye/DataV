import AiInstance from '@/axiosInstance'

export const askAiQuestion = async (message: string, conversation_id: string): Promise<string> => {
  try {
    const response = await AiInstance.post<{ answer: string }>('/mark/chat/chat-message', {
      streaming: true,
      user_id: 'mark',
      conversation_id, message

    })
    return response.data.answer
  } catch (error) {
    return `只能北化同学体验哦～

请连接校园网，或者让 Mark 帮你开电脑！`
  }
}

export const createAiConversation = async (): Promise<string> => {
  try {
    const response = await AiInstance.post<{ conversation_id: string }>('/mark/chat/conversation', {
      user_id: 'mark'
    })
    return response.data.conversation_id
  } catch (error) {
    return ''
  }
}
