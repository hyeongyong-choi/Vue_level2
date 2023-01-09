import Vue from 'vue'
import Vuex from 'vuex'
import { createStore } from "vuex";



const storage = {
  fetch(){
    const arr = []
      if(localStorage.length > 0){
        for(let i=0; i<localStorage.length; i++){
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
          // this.todoItems.push(localStorage.key(i))
        }
      }
      return arr
  }
}

export default createStore({
  state : {
    todoItems: storage.fetch()
  },
  mutations:{
    addOnetem(state, todoItem){
      let obj= {completed: false, item:todoItem};
      localStorage.setItem(todoItem,JSON.stringify(obj))
      state.todoItems.push(obj)
    },
    removeOneItem(state, removeobj){
      // console.log('removeobj',removeobj)
      localStorage.removeItem(removeobj.todoItem.item);
      state.todoItems.splice(removeobj.index,1)
    },
    toggleOneItem(state,toggleobj){
        console.log(toggleobj)
        state.todoItems[toggleobj.index].completed = !state.todoItems[toggleobj.index].completed
        localStorage.removeItem(toggleobj.todoItem.item);
        localStorage.setItem(toggleobj.todoItem.item,JSON.stringify(toggleobj));
    },
    clearAllItem(state){
      localStorage.clear();
      state.todoItems = [];
    }
  }
})