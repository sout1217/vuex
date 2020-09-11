<template>
    <div class="admin">
        <div class="alert alert-success mb-5">
            어드민 페이지입니다
        </div>

        <div class="search container">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="검색" v-model="adminId">
            </div>
            <div class="form-group">
                <div class="btn-group">
                    <!-- path 를 이용한 방법 -->
                    <button type="button" class="btn btn-dark btn-lg"
                            @click="$router.push({ path: `/admin/${adminId}` }); adminId = null;">검색 - path 를 통한 이동
                    </button>

                    <!-- name 을 이용한 방법 -->
                    <!-- params 에서 adminId 는 사용 중이기 때문에 adminId: adminId 로 적으면 오류가 난다 -->
                    <!-- 때문에 보낼 때는 사용하지 않는 변수명 id: adminId 로 적어주어야 한다 -->
                    <button type="button" class="btn btn-outline-dark btn-lg"
                            @click="$router.push({ name: 'adminDetail', params: { id: this.adminId } }); adminId = null;">검색 - name 을 통한
                        이동
                    </button>
                </div>
            </div>
        </div>

        <div class="children">
            <router-view />
        </div>

    </div>
</template>

<script>
    export default {
        name: "Admin",
        data() {
            return {
                adminId: null
            }
        }
    }
</script>

<style scoped>

</style>