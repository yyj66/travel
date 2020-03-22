<template>
  <div class="list" ref="list">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-warpper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-warpper" v-for="item of hotCities" :key="item.id">
            <div class="button" @click="handleBtnClick(item.name)">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(list, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="item of list" :key="item.id"
          @click="handleLiClick(item.name)">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'List',
  props: {
    hotCities: {
      type: Array,
      required: true
    },
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleBtnClick (city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    },
    handleLiClick (city) {
      // this.$store.commit('changeCityMutation', city)
      this.changeCityMutation1(city)
      this.$router.push('/')
    },
    ...mapMutations({
      changeCityMutation1: 'changeCityMutation'
    })
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.list)
  },
  watch: {
    letter: function (letter) {
      const element = this.$refs[letter][0]
      this.scroll.scrollToElement(element)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.border-topbottom
  &:before
      border-color :#ccc
  &:after
      border-color :#ccc
.border-bottom
  &:before
      border-color :#ccc
.list
    overflow :hidden
    position :absolute
    top:1.58rem
    left:0
    right:0
    bottom:0
    .title
        line-height :.44rem
        background :#eee
        padding-left :.2rem
        color :#666
        font-size :.26rem
    .button-list
        overflow :hidden
        padding:.1rem .6rem .1rem .1rem
        .button-warpper
            float: left
            width :33.33%
            .button
                text-align :center
                padding:.1rem 0
                margin :.1rem
                border :.02rem solid #ccc
                border-radius :.06rem
    .item-list
        .item
            line-height :.76rem
            padding-left :.2rem
</style>
