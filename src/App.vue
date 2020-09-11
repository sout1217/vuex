<template>
  <div id="nav">

    <div class="select mb-5">
      <div class="custom-control custom-control-inline custom-radio">
        <input type="radio" class="custom-control-input" id="radio_1" name="radioN_1" value="첫 번째 홈">
        <label class="custom-control-label" for="radio_1" @click="firstHomeShow()">첫 번째 홈</label>
      </div>
      <div class="custom-control custom-control-inline custom-radio">
        <input type="radio" class="custom-control-input" id="radio_2" name="radioN_1" value="두 번째 홈">
        <label class="custom-control-label" for="radio_2" @click="secondHomeShow()">두 번째 홈</label>
      </div>
    </div>

    <sign-home-first v-show="firstHome" />

    <sign-home-second v-show="secondHome" />

  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
  import SignHomeFirst from "@/views/sign/SignHomeFirst";
  import SignHomeSecond from "@/views/sign/SignHomeSecond";

  export default {
    components: {SignHomeSecond, SignHomeFirst},
    data() {
      return {
        firstHome: true,
        secondHome: false
      }
    },
    methods: {
      firstHomeShow() {
        this.firstHome = true
        this.secondHome = false
      },
      secondHomeShow() {
        this.firstHome = false
        this.secondHome = true
      }
    }
  }
</script>