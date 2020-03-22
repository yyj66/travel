export default {
  changeCity (context, city) {
    context.commit('changeCityMutation', city)
  }
}
