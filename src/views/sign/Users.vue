<template>
    <div class="users">
        <div class="alert alert-success">
            유저 페이지입니다
        </div>
        <p>유저 아이디 = {{ parameters.userId }}</p>
    </div>
</template>

<script>
    export default {
        name: "Users",
        computed: {
            parameters() {
                return this.$route.params
            }
        },
        beforeRouteEnter(to, form, next) {
            console.log('before Enter')
            next()
        },
        created() {
            console.log('created')
        },
        // 버전이 높아지면서 router 에서 사라졌다
        // beforeRouteLeave(to, from, next) {
        //     console.log('to: ', to, 'from: ', from)
        //     next()
        // },
        // destroyed 는 생명주기는 버전이 올라가면서 사라졌다 대신 unmounted 을 사용한다
        // destroyed() {
        //     console.log('destroyed')
        // },
        // 낮은 버전에서 위의 순서는 beforeRouteEnter -> created -> beforeRouteLeave -> destroyed 이다

        // beforeDestroyed 와 destroyed 가 사라지면서 생긴 라이프 사이클이다
        unmounted() {
            console.log('unmounted')
        }
    }
</script>

<style scoped>

</style>