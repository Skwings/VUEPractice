<template>
  <div class="">
    <input type="text" ref="maxInput" maxlength="5" v-model="inputVal" @blur="test" />
  </div>
</template>

<script>
export default {
  name: 'MaxInput',
  data() {
      return {
          inputVal: ''
      }
  },
  methods: {
    test(){
        alert(this.inputVal)
    }
  },
  watch:{
      inputVal: {
          handler: function(){
              if(this.$refs.maxInput.value.length > 5){
                  alert('输入框长度最大不能大于5')
                  return
              }
          }
      }
  }
}
</script>

<style>

</style>