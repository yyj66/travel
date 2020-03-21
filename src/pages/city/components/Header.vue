<template>
  <div>
    <div class="header">
      国内城市
      <router-link to="/">
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
    </div>
    <div class="search">
      <input class="search-input" type="text" placeholder="请输入城市名称搜索">
    </div>
  </div>
</template>
<script>
export default {
  name: 'City'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.header
  position :relative
  overflow :hidden
  height :.86rem
  line-height :.86rem
  text-align :center
  color :#fff
  background :$bgcolor
  font-size :.32rem
  .header-back
    position :absolute
    top:0
    left :0
    width :.64rem
    text-align :center
    font-size :.4rem
    color :#fff
.search
  height :.72rem
  padding:0 .1rem
  background :$bgcolor
  .search-input
    box-sizing :border-box
    width :100%
    height :.62rem
    padding:0 .1rem
    line-height :.62rem
    text-align :center
    border-radius :.06rem
    color:#666
</style>
