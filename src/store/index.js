import { createStore } from 'vuex'
import { module2 } from "@/store/module2";
import { module3 } from "@/store/module3";

const module1 = {
  state: {
    chatList: [
      { id: 1, lastMessage: '채팅 메시지1', new: 1 },
      { id: 2, lastMessage: '채팅 메시지2', new: 2 },
      { id: 3, lastMessage: '채팅 메시지3', new: 1 },
      { id: 4, lastMessage: '채팅 메시지4', new: 3 },
      { id: 5, lastMessage: '채팅 메시지5', new: 5 },
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

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    module1,
    module2,
    module3
  }
})


