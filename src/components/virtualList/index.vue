<template>
    <div class="list-wrap" ref="listWrap" @scroll="scrollListener">
        <div class="scroll-bar" ref="scrollBar"></div>
        <ul class="list" ref="list">
            <li v-for="val in showList" :key="val">{{val}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "VirtualList",
    data() {
        return {
            list: [],//数据集合
            start: 0,
            end: this.showNum, //滚动过程显示的结束索引
        }
    },
    props:["itemHeight", "showNum"],
    computed: {
        showList(){
            return this.list.slice(this.start, this.end);
        }
    },
    methods: {
        scrollListener(){
            let scrollTop = this.$refs.listWrap.scrollTop;
            //获取开始索引
            this.start = Math.floor(scrollTop / this.itemHeight);
            //结束索引
            this.end = this.start + this.showNum;
            this.$refs.list.style.top = this.start * this.itemHeight + "px"
        }
    },
    mounted() {
        //构建列表
        for(let i = 0; i < 10000; i++){
            this.list.push('列表' + i);
        }
        //计算滚动容器高度
        this.$refs.listWrap.style.height = this.itemHeight * this.showNum + 'px';
        //计算总的数据需要得高度，构造滚动条高度
        this.$refs.scrollBar.style.height = this.itemHeight * this.list.length + 'px';
    },
}
</script>

<style>
    .list-wrap{
        position: relative;
        overflow-y: scroll;
        border: 1px solid red;
    }
    .list{
        position: absolute;
        top: 0;
        left: 0;
    }
    .list li{
        border: solid 1px blue;
        line-height: 30px;
    }
</style>