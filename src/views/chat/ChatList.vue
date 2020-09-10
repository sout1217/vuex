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
                    <chat-item :chat="chat" @read="readChatItem(chat)"/>
                </template>
            </div>
        </div>

    </div>
</template>

<script>
    import ChatItem from "@/views/chat/ChatItem";
    import { mapState } from 'vuex';

    export default {
        name: "messageList",
        components: {ChatItem},
        data() {
          return {
          }
        },
        computed: {
            newMessageCount() {
                return this.chatList.map(chat => chat.new).reduce((total, val) => total + val)
            },
            ...mapState({
                /** 1번째 방법 Arrow function 형식 */
                chatList: state => state.chatList // .filter(chat => chat.new >= 2)

                /** 2번째 방법 String 형식 */
                // chatList: 'chatList'

                /** 3번째 방법 method 형식 */
                // chatList(state) {
                //     return state.chatList.filter(chat => chat.new >= 2);
                // }
            })
        },
        methods: {
            readChatItem(chatItem) {
                this.chatList.filter(chat => chat.id === chatItem.id)[0].new = 0
            }
        },
    }
</script>

