export const module3 = {
    state: {
        chatList: [
            { id: 1, lastMessage: '채팅 메시지11', new: 100 },
            { id: 2, lastMessage: '채팅 메시지12', new: 200 },
            { id: 3, lastMessage: '채팅 메시지13', new: 100 },
            { id: 4, lastMessage: '채팅 메시지14', new: 300 },
            { id: 5, lastMessage: '채팅 메시지15', new: 500 },
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