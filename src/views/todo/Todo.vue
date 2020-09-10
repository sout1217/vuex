<template>
    <button class="list-group-item text-left" @click="clickButton()">
        {{ label }}
    </button>
</template>
<script>
    export default {
        name: 'todo',
        props: ['label'],
        methods: {
            clickButton() {
                this.$emit('component-click')
            }
        }
    }
</script>
