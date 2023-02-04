import vuex from "vuex"

export default () => {
  return new vuex.Store({
     state :() => ({
      information:[],
      ballenceAccount:[
        {wallet:"3,845,425",block:"94,500"}
      ]

  }),
    mutations: {
    setInfo(state,data){
    state.information=[...data]
    // console.log("setInfo",state.information)
    },

    },


    actions: {
    async nuxtServerInit({ commit }) {
      let x
      const res= await this.$axios.get('https://63d3de42c1ba499e54cad952.mockapi.io/api/v1/shifts/list')
    .then(response => x=response.data)
    commit('setInfo', x)
    // console.log("x",x)
  }

    },
    getters: {
      showInformation(state) {
       return state.information
     },
     walletInfo(state){
      return state.ballenceAccount
     }
     },
  })
}




