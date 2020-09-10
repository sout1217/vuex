<template>
    <div id="app">
        <message-list />
    </div>
</template>

<script>
    import MessageList from "@/views/chat/ChatList";

    export default {
        name: 'App',
        components: {
            MessageList
        },
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
