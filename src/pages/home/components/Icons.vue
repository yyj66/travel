<template>
    <div class="icons">
       <swiper>
          <swiper-slide v-for="(page,index) of pages" :key="index">
            <div class="icon" v-for="item of page" :key="item.id">
              <div class="icon-img">
                    <img class="icon-img-content" :src="item.imgURL"/>
              </div>
              <p class="icon-desc">{{item.desc}}</p>
            </div>
          </swiper-slide>

        </swiper>
  </div>

</template>
<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [
        {
          id: '01',
          imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },
        {
          id: '02',
          imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
          desc: '古镇'
        },
        {
          id: '03',
          imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
          desc: '踏景赏花'
        },
        {
          id: '04',
          imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
          desc: '苏州园林'
        },
        {
          id: '05',
          imgURL: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          desc: '一日游'
        },
        {
          id: '06',
          imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '华谊兄弟'
        },
        {
          id: '07',
          imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },
        {
          id: '08',
          imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },
        {
          id: '09',
          imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        }
      ]
    }
  },
  computed: {
    pages () {
      let pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style scoped lang='stylus'>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';
  .icons >>> .swiper-container
    height:0
    padding-bottom:50%
  .icon
    position :relative
    float :left
    width :25%
    height :0
    padding-bottom :25%
    overflow :hidden
    .icon-img
      position :absolute
      top:0
      left :0
      right:0
      bottom .44rem
      box-sizing:border-box
      padding :.1rem
      .icon-img-content
        display :block
        margin : 0 auto
        height :100%
    .icon-desc
      position :absolute
      left :0
      right:0
      bottom 0
      height :.44rem
      line-height :.44rem
      color :$darkTextColor
      text-align :center
      ellipsis()

</style>
