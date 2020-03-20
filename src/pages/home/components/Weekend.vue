<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
               <div class="item-img-wrapper">
                  <img class="item-img" :src="item.imgURL"/>
               </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>

            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '001',
          imgURL: 'http://img1.qunarzz.com/sight/source/1505/8a/d412db9fcd44dd.jpg_r_640x214_86f303a2.jpg',
          title: '苏州园林',
          desc: '真的是特别的漂亮,真的是特别的漂亮,真的是特别的漂亮,重要的事情说三遍'
        },
        {
          id: '002',
          imgURL: 'http://img1.qunarzz.com/sight/source/1505/8a/d412db9fcd44dd.jpg_r_640x214_86f303a2.jpg',
          title: '苏州园林',
          desc: '真的是特别的漂亮,真的是特别的漂亮,真的是特别的漂亮,重要的事情说三遍'
        },
        {
          id: '003',
          imgURL: 'http://img1.qunarzz.com/sight/source/1505/8a/d412db9fcd44dd.jpg_r_640x214_86f303a2.jpg',
          title: '苏州园林',
          desc: '真的是特别的漂亮,真的是特别的漂亮,真的是特别的漂亮,重要的事情说三遍'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';
  .title
    margin-top :.2rem
    line-height :.8rem
    text-indent :.2rem
    background :#eee
  .item-img-wrapper
    overflow :hidden
    height :0
    padding-bottom :33.9%
    .item-img
      width :100%
  .item-info
    padding :.1rem
    .item-title
      line-height :.54rem
      font-size :.32rem
      ellipsis()
    .item-desc
      line-height :.4rem
      color :#ccc
      ellipsis()

</style>
