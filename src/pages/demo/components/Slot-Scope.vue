<template>
  <div>
    <div>啦啦啦啦，就显示在第一排</div>
    <slot v-bind:userInfo="user">
      {{ user.firstName }}
    </slot>
  </div>
</template>

<script>
export default {
  name: 'SlotDemo',
  data () {
    return {
      user: {
        firstName: 'JIA',
        lastName: 'xiabao'
      }
    }
  }
}
</script>
<style></style>
