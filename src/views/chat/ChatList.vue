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

    export default {
        name: "messageList",
        components: {ChatItem},
        data() {
          return {
              chatList: [
                  { id: 1, lastMessage: '채팅 메시지1', new: 1 },
                  { id: 2, lastMessage: '채팅 메시지2', new: 2 },
                  { id: 3, lastMessage: '채팅 메시지3', new: 1 },
                  { id: 4, lastMessage: '채팅 메시지4', new: 1 },
                  { id: 5, lastMessage: '채팅 메시지5', new: 5 },
              ]
          }
        },
        computed: {
            newMessageCount() {
                return this.chatList.map(chat => chat.new).reduce((total, val) => total + val)
            }
        },
        methods: {
            readChatItem(chatItem) {
                this.chatList.filter(chat => chat.id === chatItem.id)[0].new = 0
            }
        },
    }
</script>

