<template>
  <div>
    <div class="blue">
      <slot name="header"></slot>
    </div>
    <div class="red">
      <slot></slot>
    </div>
    <div class="green">
      <slot name="footer"></slot>
    </div>
    <div></div>
    <div></div>
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
<style>
.blue {
  background: blue;
  margin-bottom: 20px;
  height: 100px;
}
.red {
  background: red;
  margin-bottom: 20px;
  height: 100px;
}
.green {
  background: green;
  height: 100px;
}
</style>
