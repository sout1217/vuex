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
                // 첫 번째 인자는 실행 할 mutation 명
                // 두 번째 인자는 부모 컴포넌트로 부터 넘어온 chat 들을 넘겨준다
                this.$store.commit('readChat', {...this.chat})

            }
        }
    }
</script>
