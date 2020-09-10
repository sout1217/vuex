import { createStore } from 'vuex'

export default createStore({
  // production 모드가 아닌 경우에만 오류 메시지를 출력한다
  // 액션을 추가하지 않았는 데, 이벤트를 실행하는 경우 오류를 출력하기 위해 strict 모드를 사용한다
  strict: process.env.NODE_ENV !== 'production',
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
