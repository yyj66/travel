<template>
  <div>
    <!-- 父子组件通讯，组件间通讯-自定义事件，生命周期函数-->
    <div>
      <Parent />
      <!-- <button @click="handleShow">控制显示和隐藏</button> -->
    </div>

    <!-- 自定义组件使用v-model
    <div>
      {{ name }}
      <CustomModel v-model="name" />
    </div> -->

    <!-- vue组件更新之后，如何获取最新DOM
    <NextTickDemo/> -->

    <!-- 插槽的基本用法
    <SlotDemo>
      <div>就是这个了</div>
    </SlotDemo> -->

    <!-- 具名插槽
    <SlotNamed>
      <template>
        <ul>
          <li>A</li>
          <li>A</li>
          <li>A</li>
        </ul>
      </template>
      <template v-slot:header>
        <ul>
          <li>B</li>
          <li>B</li>
          <li>B</li>
        </ul>
      </template>
      <template #footer>
        <p>一大段文字啊</p>
      </template>
    </SlotNamed> -->

    <!-- 作用域插槽，父组件访问子组件内的内容
    <SlotScope>
      <template v-slot='slotProps'>
        {{slotProps.userInfo.lastName}}
      </template>
    </SlotScope> -->

    <!-- <component :is="NextTickName"></component> -->
  </div>
</template>

<script>
import Parent from "./Parent";
import CustomModel from "./components/CustomModel";
import NextTickDemo from "./components/NextTickDemo";
import SlotDemo from "./components/Slot-Base";
import SlotNamed from "./components/Slot-Named";
import SlotScope from "./components/Slot-Scope";
export default {
  name: "Demo",
  data() {
    return {
      show: true,
      name: "jyy",
      NextTickName: "NextTickDemo"
    };
  },
  components: {
    Parent,
    CustomModel,
    NextTickDemo,
    SlotDemo,
    SlotNamed,
    SlotScope
  },
  methods: {
    handleShow() {
      this.show = !this.show;
    }
  }
};
</script>
<style></style>
