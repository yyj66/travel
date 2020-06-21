<template>
  <div>
    <button @click="addItem">增加</button>
    <br />
    <button @click="initCurrentItem">初始化一个点击对象（比如第一项）</button>
    <ul class="ul">
      <draggable v-model="list" group="people">
        <li v-for="item of list" :key="item.id" @click="clickItem(item)">
          <h1 style="color:red">{{ item.title }}</h1>
          <ul style="margin-bottom:16px;  list-style-type: square;">
            <li v-for="item1 of item.items" :key="item1.id">
              <span style="color:blue">{{ item1.name }}</span>
            </li>
          </ul>
        </li>
      </draggable>
    </ul>
    <hr />
    <span v-if="!currentItem.id">还没有显示列表</span>
    <item v-else :currentItem="currentItem" />
  </div>
</template>

<script>
import item from "./components/item";
import draggable from "vuedraggable";

export default {
  name: "Parent",
  data() {
    return {
      list22: [
        {
          id: "001",
          title: "javaScript",
          items: [
            { id: 1, name: "javaScript-1" },
            { id: 2, name: "javaScript-2" }
          ]
        },
        {
          id: "002",
          title: "CSS",
          items: [
            { id: 1, name: "css-1" },
            { id: 2, name: "css-2" }
          ]
        },
        {
          id: "003",
          title: "HTML",
          items: [
            { id: 1, name: "html-1" },
            { id: 2, name: "html-2" }
          ]
        }
      ],
      list: [],
      currentItem: {}
    };
  },
  components: {
    item,
    draggable
  },
  updated() {
    console.log("parent updated");
  },
  methods: {
    addItem() {
      const id = Math.floor(Math.random() * 10000000);
      this.list.push({
        id: id,
        title: "parent-item-" + id,
        items: []
      });
    },
    clickItem(item) {
      console.log("clickItem");

      this.currentItem = item;
    },
    initCurrentItem() {
      this.currentItem = this.list[0];
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
