<template>
  <div>
    <ul class="ul">
      <li v-for="item of list" :key="item.id">
          <span>{{ item.title }}</span>
          <button @click="deleteList(item.id)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import event from '../../event'
export default {
  name: 'List',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    deleteList (id) {
      this.$emit('delete', id)
    },
    addTitleHandler (title) {
    //   console.log('list ', title)
    }
  },
  beforeCreate () {
    console.log('child2 beforeCreate')
  },
  created () {
    console.log('child2 created')
  },
  beforeMount () {
    console.log('child2 beforeMount')
  },
  mounted () {
    console.log('child2 mounted')
    event.$on('addTitle', this.addTitleHandler)
  },
  beforeUpdate () {
    console.log('child2 beforeUpdate')
  },
  updated () {
    console.log('child2 updated')
  },
  beforeDestroy () {
    console.log('child2 beforeDestroy')
    event.$off('addTitle', this.addTitleHandler)
  },
  destroyed () {
    console.log('child2 destroyed')
  }
}
</script>
<style>
.ul{
    margin: 20px;
    list-style-type: circle;
}
</style>
