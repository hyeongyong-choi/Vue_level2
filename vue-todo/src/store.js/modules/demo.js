
const state = {
  price: 100
};

const getters = {
  originalPrice(state){
    return state.price;
  },
  doublePrice(state){
    return state.price*2
  },
  triplePrice(state){
    return state.price*3
  },
}


export default {
  state,
  getters,
}