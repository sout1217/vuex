<template>
    <div class="sign-home-first mb-5">
        <div class="btn-group">
            <button @click="$router.push({name: 'signInPage'})" type="button" class="btn btn-primary">로그인</button>
            <button @click="$router.push({name: 'signUpPage', query: {}, params: {}})" type="button"
                    class="btn btn-danger">회원가입
            </button>
            <button @click="$router.push({path: '/sign-up'})" type="button" class="btn btn-info ">회원가입</button>
            <button @click="$router.push('/sign-out')" type="button" class="btn btn-warning text-white">로그아웃</button>
        </div>
        <hr>
    </div>
</template>
<script>
    export default {
        name: 'sign-home-first'
    }
</script>
<style>

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

</style>