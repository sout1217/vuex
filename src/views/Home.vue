<template>
    <div class="home">
        <div class="alert alert-success">
            Home 페이지 입니다
        </div>

        <div v-if="infoParametersShow" class="info">
            <p>유저 아이디 = {{ parameters.userId}} </p>

            <p>유저 패스워드 = {{ parameters.passWd }}</p>
        </div>

        <div v-else-if="infoQueryShow">
            <p>유저 아이디 = {{ query.userId}} </p>

            <p>유저 패스워드 = {{ query.passWd }}</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Home",
        computed: {
            parameters() {
                console.log(this.$route)
                console.log(this.$route.params)
                return this.$route.params
            },
            query() {
              return this.$route.query
            },
            infoParametersShow() {
                return Object.keys(this.parameters).length !== 0 &&
                    Object.entries(this.parameters).length !== 0 &&
                    this.parameters.userId != '' &&
                    this.parameters.passWd != ''
            },
            infoQueryShow() {
                console.log(this.$route.query)

                return Object.keys(this.$route.query).length !== 0 &&
                    Object.entries(this.$route.query).length !== 0 &&
                    this.$route.query.userId != '' &&
                    this.$route.query.passWd != ''
            }
        }
    }
</script>

<style scoped>

</style>