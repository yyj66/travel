<template>
  <div>
    <city-header/>
    <city-list :hot-cities="hotCities" :cities="cities" :letter="letter"/>
    <city-alphabet :cities="cities" @change="handleLetterChange"/>
  </div>
</template>
<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  methods: {
    getListInfo () {
      axios.get('/api/city.json').then((res) => {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.hotCities = data.hotCities || []
          this.cities = data.cities
        }
      })
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getListInfo()
  }
}
</script>

<style lang="stylus" scoped></style>
