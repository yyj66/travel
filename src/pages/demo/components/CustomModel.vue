<template>
    <div>
        <input class="inputBorder" type="text"
        :value="text1"
        @input="$emit('change1',$event.target.value)" >
    </div>
</template>

<script>
export default {
  name: 'CustomModel',
  model: {
    prop: 'text1',
    event: 'change1'
  },
  props: {
    text1: {
      type: String,
      default: ''
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
