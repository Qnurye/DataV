import { AiInstance } from '@/axiosInstance'

export const askAiQuestion = async (message: string, conversation_id: string): Promise<string> => {
  try {
    const response = await fetch('http://10.12.112.166:9977/v1/api/mark/chat/chat-message', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        streaming: true,
        conversation_id: conversation_id || '5',
        message,
        user_id: 'mark'
      })
    })

    if (!response.ok) {
      throw new Error(response)
    }

    const reader = response.body.getReader()
    let result = ''
    const decoder = new TextDecoder()

    return new Promise((resolve, reject) => {
      const read = () => {
        reader
        .read()
        .then(({ done, value }) => {
          if (done) {
            resolve(result)
            return
          }
          result += decoder.decode(value)
          read()
        })
        .catch(reject)
      }
      read()
    })
  } catch (error) {
    console.log(error)
    return ` 只能北化同学体验哦～

请连接校园网，或者让 Mark 帮你开电脑！`
  }
}

export const createAiConversation = async (): Promise<string> => {
  try {
    const response = await AiInstance.post<{
      data: {
        conversation_id: string
      }
    }>('/mark/chat/create-conversation', {
      user_id: 'mark',
      knowledge_base_id: 'kb5638f3942a054f'
    })
    return response.data.conversation_id
  } catch (error) {
    return ''
  }
}
