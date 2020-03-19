<template>
<div class="swiper">
  <swiper :options="swiperOption">
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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        speed: 300
      },
      swiperList: [{
        id: 1,
        imgURL: 'https://img1.qunarzz.com/qs/1912/96/2c110e7b64063502.jpg'
      }, {
        id: 2,
        imgURL: 'https://img1.qunarzz.com/qs/2001/ee/4314b96b1ba42702.jpg'
      }, {
        id: 3,
        imgURL: 'https://img1.qunarzz.com/qs/2001/d9/8844a335554e1c02.jpg'
      }
      ]
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
        padding-bottom :54.48%
        background :#eee
        .swiper-img
          width :100%
</style>
