<template>
    <div class="admin-edit">
        <div class="alert alert-danger mb-5">
            어드민 수정 페이지입니다
        </div>

        <p>유저번호: {{ adminId }}</p>



    </div>
</template>

<script>
    export default {
        name: "AdminEdit",
        computed: {
            adminId() {
                return this.$route.params.id
            }
        }
    }
</script>

<style scoped>

</style>