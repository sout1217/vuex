import { createStore } from 'vuex'

export default createStore({
  state: {
    chatList: [
      { id: 1, lastMessage: '채팅 메시지1', new: 1 },
      { id: 2, lastMessage: '채팅 메시지2', new: 2 },
      { id: 3, lastMessage: '채팅 메시지3', new: 1 },
      { id: 4, lastMessage: '채팅 메시지4', new: 3 },
      { id: 5, lastMessage: '채팅 메시지5', new: 5 },
    ]
  },
  getters: {
      chatList: state => state.chatList
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
