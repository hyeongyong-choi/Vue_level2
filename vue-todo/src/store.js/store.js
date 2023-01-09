import { createStore } from "vuex";
// import * as getters from './getters'
// import * as mutations from './mutations'
import todoApp from './modules/todoApp'
import demo from './modules/demo'

export default createStore({
 modules: {
  todoApp,
  demo
 }
})