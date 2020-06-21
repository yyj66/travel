<template>
  <div>
    <span>{{ currentItem.title }}</span>
    <button @click="addItem">新增</button>
    <ul class="ul">
      <li v-for="(item, index) of currentItem.items" :key="item.id">
        <span>{{ item.name }}</span>
        <button @click="deleteItem(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import event from "../../event";
export default {
  name: "item",
  props: {
    currentItem: {
      type: Object,
      required: true
    }
  },
  updated() {
    console.log("currentItem updated");
  },
  methods: {
    deleteItem(index) {
      // this.$emit("delete", id);
      this.currentItem.items.splice(index, 1);
    },
    addItem() {
      const id = Math.floor(Math.random() * 10000);
      this.currentItem.items.push({
        id: id,
        name: "test-" + id
      });
    }
  }
};
</script>
<style>
.ul {
  margin: 20px;
  list-style-type: circle;
}
</style>
