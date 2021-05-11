<template>
    <div class="header-bar">
        <div class="logo">{{this.title}}</div>
    </div>
</template>

<script>
export default {
    name: 'HeaderBar',
    props: {
        title: {
            type: String,
            default: false
        }
    },
    data() {
        return {
        }
    },
    mounted() {
    },
}
</script>

<style lang="less" scoped>
    .header-bar{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 60px;
        line-height: 60px;
        padding: 0 20px 0 220px;
        background: black;
        color: white;
        .logo{
            font-family: 'Times New Roman', Times, serif;
            font-weight: bold;
        }
    }
</style>