<template>
    <button class="list-group-item text-left d-flex justify-content-between" @click="readChatItem">
        {{ chat.lastMessage }}
        <span class="badge badge-primary">
                        + {{ chat.new }}
                    </span>
    </button>
</template>
<script>
    export default {
        name: 'chat-item',
        props: {
            chat: {},
        },
        methods: {
            readChatItem() {
                this.$emit('read')
            }
        }
    }
</script>
