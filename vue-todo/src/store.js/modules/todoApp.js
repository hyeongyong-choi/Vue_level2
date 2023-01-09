
const storage = {
  fet(){
    const arr = []
      if(localStorage.length > 0){
        for(let i=0; i<localStorage.length; i++){
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
          // this.todoItems.push(localStorage.key(i))
        }
      }
      console.log('arr',arr)
      return arr
  }
}

const state = {
  todoItems: storage.fet()
};

const getters = {
  storedTodoItems (state) {
    // console.log('state',state)
    return state.todoItems
  }
}

const mutations = {
  addOnetem(state, todoItem) {
    let obj= {completed: false, item:todoItem};
    localStorage.setItem(todoItem,JSON.stringify(obj))
    state.todoItems.push(obj)
  },
  removeOneItem (state, payload) {
    // console.log('payload',payload)
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index,1)
  },
  toggleOneItem(state,payload){
      console.log(payload)
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem.item,JSON.stringify(payload.todoItem));
  },
   clearAllItem (state){
    localStorage.clear();
    state.todoItems = [];
  } 
}

export default {
  state,
  getters,
  mutations
}