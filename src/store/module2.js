export const module2 = {
    state: {
        chatList: [
            { id: 1, lastMessage: '채팅 메시지6', new: 10 },
            { id: 2, lastMessage: '채팅 메시지7', new: 20 },
            { id: 3, lastMessage: '채팅 메시지8', new: 10 },
            { id: 4, lastMessage: '채팅 메시지9', new: 30 },
            { id: 5, lastMessage: '채팅 메시지10', new: 50 },
        ]
    },
    mutations: {
        readChat(state, chat) {
            state.chatList.forEach(item => {
                if (item.id === chat.id) {
                    item.new = 0
                }
            })

        }
    },
    actions: {
        readChat(context, chat) {
            context.commit('readChat', chat)
        }
    }
}