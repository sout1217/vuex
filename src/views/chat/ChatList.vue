<template>

    <div class="messageList">

        <div class="header">
            <div class="alert alert-primary text-right">
                <span class="badge badge-fill badge-danger">{{ newMessageCount }}</span>
            </div>
        </div>

        <div class="container">

            <div class="list-group">
                <template v-for="(chat, index) in chatList" :key="index">
                    <chat-item :chat="chat" />
                </template>
            </div>

            <div class="btn-group mt-3">
                <button @click="updateModule(1)" class="btn btn-sm btn-danger">모듈 1</button>
                <button @click="updateModule(2)" class="btn btn-sm btn-warning">모듈 2</button>
                <button @click="updateModule(3)" class="btn btn-sm btn-primary">모듈 3</button>
            </div>

        </div>

    </div>
</template>

<script>
    import ChatItem from "@/views/chat/ChatItem";
    import {mapState} from 'vuex';

    export default {
        name: "messageList",
        components: {ChatItem},
        data() {
          return {
              moduleType: 0
          }
        },
        computed: {
            newMessageCount() {
                return this.chatList.map(chat => chat.new).reduce((total, val) => total + val)
            },
            /** 첫 번째 방법 */
            // ...mapState({
            //     chatList: state => state.module1.chatList
            // })
            /** 두 번째 방법 */
            // ...mapState({
            //     chatList(state) {
            //         return state.module1.chatList
            //     }
            // })
            /** 두 번째 방법 이용 */
            ...mapState({
                chatList(state) {
                    switch (this.moduleType) {
                        case 1: return state.module1.chatList
                        case 2: return state.module2.chatList
                        case 3: return state.module3.chatList
                    }
                    return state.module1.chatList
                }
            })
        },
        methods: {
            updateModule(num) {
                this.moduleType = num
            }
        },
    }
</script>

