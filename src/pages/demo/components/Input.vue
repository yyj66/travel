<template>
    <div>
        <input class="inputBorder" type="text" v-model="title1">
        <button @click="addTitle">新增</button>
    </div>
</template>

<script>
import event from '../../event'
export default {
  name: 'Input',
  data () {
    return {
      title1: ''
    }
  },
  methods: {
    addTitle () {
      this.$emit('add', this.title1)
      event.$emit('addTitle', this.title1)
      this.title1 = ''
    }

  }
  // beforeCreate () {
  //   console.log('child1 beforeCreate')
  // },
  // created () {
  //   console.log('child1 created')
  // },
  // beforeMount () {
  //   console.log('child1 beforeMount')
  // },
  // mounted () {
  //   console.log('child1 mounted')
  // },
  // beforeUpdate () {
  //   console.log('child1 beforeUpdate')
  // },
  // updated () {
  //   console.log('child1 updated')
  // },
  // beforeDestroy () {
  //   console.log('child1 beforeDestroy')
  // },
  // destroyed () {
  //   console.log('child1 destroyed')
  // }
}
</script>
<style>
.inputBorder{
    margin: 10px;
    border: blue solid 2px;
}

</style>
