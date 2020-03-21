<template>
<div>
    <home-header :city="city"></home-header>
    <home-swiper :swiper-list="swiperList"></home-swiper>
    <home-icons :icon-list="iconList"></home-icons>
    <home-recommend :recommend-list="recommendList"></home-recommend>
    <home-weekend :weekend-list="weekendList"></home-weekend>
</div>
</template>
<script>
import axios from 'axios'
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json').then(this.getHomeInfoSuss)
    },
    getHomeInfoSuss (res) {
      if (res && res.status === 200 && res.data) {
        const data = res.data.data || []
        this.city = data.city || ''
        this.swiperList = data.swiperList || []
        this.iconList = data.iconList || []
        this.recommendList = data.recommendList || []
        this.weekendList = data.weekendList || []
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
<style scoped>

</style>
