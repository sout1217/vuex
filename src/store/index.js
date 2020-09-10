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
  // state 의 값을 변경하기 메소드를 적는 곳
  mutations: {
    readChat(state, chat) {
      state.chatList.forEach(item => {
        if (item.id === chat.id) {
          item.new = 0
        }
      })

    }
  },
  // 컴포넌트는 action 을 실행하고, action 이 mutations 을 실행해야 한다.
  // 현재는 백엔드 api 비동기처리를 하지 않기 때문에 자식 컴포넌트인 ChatItem.vue 에서 바로 mutations 을 실행하였다.
  actions: {
    // context 는 store 를 가져오거나 getter 를 가져오며 commit 메소드가 존재한다
    // chat 은 컴포넌트로 부터 넘어온 인자 값 이다.
    readChat(context, chat) {
      context.commit('readChat', chat)
    }
  },
  modules: {
  }
})
