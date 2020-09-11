<template>
    <div class="admin-detail">
        <div class="alert alert-warning mb-5">
            어드민 아이디 페이지입니다
        </div>

        <p> 유저 아이디: {{ adminId }}</p>


        <div class="btn-group">
            <!-- path 를 이용한 방법 -->
            <!-- [잘못된 예시] 하위 경로에서 형제 경로로 갈 때에는 부모 경로를 적지 않는다  -->
            <button class="btn btn-danger" @click="$router.push({ path: `admin/${adminId}/edit` })">수정 - path 를 통한 이동 (X)</button>

            <!-- [올바른 예시] 부모경로를 안 적는다  -->
            <button class="btn btn-success" @click="$router.push({ path: `${adminId}/edit` })">수정 - Path 를 통한 이동 (O)</button>

            <!-- name 을 이용한 방법 -->
            <button class="btn btn-primary" @click="$router.push({ name: 'adminEdit', params: { id: this.adminId } })">수정 - name 을 통한 이동</button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "AdminDetail",
        computed: {
            adminId() {
                return this.$route.params.id
            }
        }
    }
</script>

<style scoped>

</style>