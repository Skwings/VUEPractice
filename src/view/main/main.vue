<template>
    <div>
        <HeaderBar title="LOGO" />
        <SideMenu />
        <Content />
        <!-- <input type="text" v-model="inputValue">
        <button @click="add()">+</button>
        <button @click="reduce()">-</button>
        <p>{{ countNum }}</p> -->
        <FooterBar />
    </div>
</template>

<script>
import HeaderBar from '@/view/main/components/header-bar/index.js'
import SideMenu from '@/view/main/components/sideMenu/index.js'
import FooterBar from '@/view/main/components/footer/index.js'
import Content from '@/view/main/components/content'


export default {
    name: "Main",
    data() {
        return {
            inputValue: '1234'
        }
    },
    components:{
        HeaderBar,
        SideMenu,
        FooterBar,
        Content
    },
    computed: {
        countNum (){
            return this.$store.state.app.count
        }
    },
    methods: {
        add(){
            this.$store.commit('increCount')
        },
        reduce(){
            this.$store.commit('reduceCount')
        }
    },
    mounted: function() {
        console.log(this.$store.getters.doneTodos(1))
        // this.$store.commit('increCount')
        // this.$store.dispatch('increateCount')
    },
}
</script>

<style lang='less' scoped>

</style>