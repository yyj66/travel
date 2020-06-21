<template>
  <div>
    <ul class="ul" ref='ul'>
      <li v-for="(item,index) of list" :key="index">
          <span>{{ item }}</span>
      </li>
    </ul>
              <button @click="add">新增</button>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      list: ['a', 'b', 'c']
    }
  },

  methods: {
    add () {
      this.list.push(`${Date.now()}`)
      this.list.push(`${Date.now()}`)
      this.list.push(`${Date.now()}`)

      this.$nextTick(() => {
        const elms = this.$refs.ul
        console.log(elms.childNodes.length)
      })

      console.log('test')
    }
  }
}
</script>
<style>
.ul{
    margin: 20px;
    list-style-type: circle;
}
</style>
