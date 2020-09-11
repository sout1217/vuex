    <template>
    <div class="sign-home-second">
        <ul class="list-group">
            <li class="list-group-item">
                <router-link to="/sign-in">로그인</router-link>
            </li>
            <li class="list-group-item">
                <router-link to="/sign-up">회원가입</router-link>
            </li>
            <li class="list-group-item">
                <router-link to="/sign-out">로그아웃</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'sign-home-second'
    }
</script>
<style>

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

</style>