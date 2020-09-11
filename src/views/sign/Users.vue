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
        created() {
            /** 모드와 라우터들(url) */
            console.log('router', this.$router);

            /** 라우터 정보 ( parameter 등 ) */
            console.log('route', this.$route);
        }
    }
</script>

<style scoped>

</style>