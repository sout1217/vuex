<template>
    <div class="sign-in">
        <div class="alert alert-primary mb-5">
            로그인 페이지입니다
        </div>

        <div class="login-form container" style="max-width: 300px">
            <!-- 1. 세로열 폼 2. 가로열 폼 -->
            <form class="form-block" action="파일명.jsp">
                <div class="form-group">
                    <label for="아이디1"><b>아이디</b> </label>
                    <input type="text" class="form-control" v-model="userId">
                </div>
                <div class="form-group">
                    <label for="아이디2"><b>패스워드</b> </label>
                    <input type="password" class="form-control" v-model="passWd">
                </div>
                <div class="custom-control custom-control-inline custom-switch">
                    <input type="checkbox" class="custom-control-input" id="switch_1" checked>
                    <label class="custom-control-label" for="switch_1" @click="toggleClick()">ON: parameters | OFF: query</label>
                </div>
                <div class="mt-4">
                    <button type="button" class="btn btn-primary btn-block" @click="submit()">로그인</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SignIn",
        data() {
            return {
                userId: '',
                passWd: '',
                toggle: true
            }
        },
        methods: {
            submit() {
                if (this.toggle) {
                    console.log('params')
                    this.$router.push({
                        name: 'Home',
                        params: {
                            userId: this.userId,
                            passWd: this.passWd
                        }
                    })
                } else {
                    console.log('query')
                    this.$router.push({
                        name: 'Home',
                        query: {
                            userId: this.userId,
                            passWd: this.passWd
                        }
                    })
                }
            },
            toggleClick() {
                this.toggle = !this.toggle
            }
        },
    }
</script>

<style scoped>

</style>