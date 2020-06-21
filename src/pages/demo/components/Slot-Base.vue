<template>
  <div>
      <div>啦啦啦啦，就显示在第一排</div>
    <slot>
     如果什么都不传，就显示默认
    </slot>
  </div>
</template>

<script>
export default {
  name: 'SlotDemo',
  data () {
    return {}
  }
}
</script>
<style></style>
