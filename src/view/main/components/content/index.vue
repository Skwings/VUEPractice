<template>
  <div class="content">
      <p>233</p>
      <MaxInput />
      <VirtualList :itemHeight="30" :showNum="10" />
  </div>
</template>

<script>
import MaxInput from '@/view/components/input/maxInput.vue'
import VirtualList from '@/components/virtualList/index.vue'

export default {
    name: 'Content',
    components: {
        MaxInput,
        VirtualList
    }
}
</script>

<style lang='less' scoped>
.content{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 80px 20px 20px 220px;
}
</style>