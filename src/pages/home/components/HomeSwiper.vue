<template>
<div class="swiper">
  <swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgURL"/>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        speed: 300
      }
    }
  },
  computed: {
    showSwiper: function () {
      return Boolean(this.swiperList.length)
    }
  }
}
</script>
<style lang='stylus' scoped>
    .swiper >>> .swiper-pagination-bullet-active
        background :#fff !important
// 宽高比例自适应
    .swiper
        overflow :hidden
        width :100%
        height :0
        padding-bottom :31.25%
        background :#eee
        .swiper-img
          width :100%
</style>
