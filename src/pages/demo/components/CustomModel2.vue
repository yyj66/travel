<template>
<input class="inputBorder" :value="testVal"  @input="handleChange"/>
</template>
<script>
export default {
  name: 'CustomModel',
  props: ['val'],
  data () {
    return {
      testVal: this.val
    }
  },
  watch: {
    val (propsVal) {
      this.testVal = propsVal
    }
  },
  methods: {
    handleChange (e) {
      this.testVal = e.target.value
      // 这里发送的事件名inupt是写死的，不能修改成其他。因为type=“text”的默认更改事件是input
      this.$emit('input', this.testVal)
    }
  }
}
</script>
<style>
.inputBorder{
    margin: 10px;
    border: blue solid 2px;
}

</style>
