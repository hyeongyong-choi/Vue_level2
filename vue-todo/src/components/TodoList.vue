<template>
  <div>
    <transition-group name="list" tag="ul">
    
      <li v-for="(todoItem,index) in this.storedTodoItems" :key="todoItem.item" class="shadow">
        <i class="fa-solid fa-check checkBtn" :class="{checkBtnCompleted:todoItem.completed}" @click="toggleComplate({todoItem,index})"></i>
        <span :class= "{textCompleted:todoItem.completed}"> {{ todoItem.item }}</span>
        <span class="removeBtn" @click="removeTodo({todoItem,index})">
          <i class="fa-solid fa-trash-can"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
  import {mapGetters , mapMutations} from 'vuex'

  export default {
    
    methods:{
      ...mapMutations({
        removeTodo : 'removeOneItem',
      }),
      // removeTodo(todoItem,index){
      //   // this.$emit('removeItem',todoItem,index);
      //   // let removeobj = {todoItem,index}
      //   this.$store.commit('removeOneItem', {todoItem,index})
      // },
      ...mapMutations({
        toggleComplate : 'toggleOneItem'
      })
      // toggleComplate(todoItem,index){
      // //  this.$emit('toggleItem',todoItem,index);
      //  let toggleobj = {todoItem : todoItem, index:index }
      //  this.$store.commit('toggleOneItem',toggleobj)
      // }
    },
    computed : {
      // todoItem(){
      //   return this.$store.getters.storedTodoItems
      // },
      ...mapGetters(['storedTodoItems'])
    }
  }
</script>

<style scoped>
ul{
  clear: both;
  list-style-type: none;
  padding-left:0px;
  margin-top:0;
  text-align:left;
}
li{
  display: flex;
  min-height:50px;
  height:50px;
  line-height:50px;
  margin:0.5rem 0;
  padding:00.9rem;
  background-color: white;
  border-radius:5px;
}
.removeBtn{
  margin-left:auto;
  color:#de4343;
}
.checkBtn{
  line-height:45px;
  color:#62acde;
  margin-right:5px;
}
.checkBtnCompleted{
  color:#b3adad;
}

.textCompleted{
  text-decoration:line-through;
  color:#b3adad;
}

/* 리스트 아이템 트랜지션효과*/

.list-enter-active, .list-leave-active{
  transition: all 1s
}
.list-enter-from, .list-leave-to{
  opacity:0;
  transform:translateY(30px);
}
</style>