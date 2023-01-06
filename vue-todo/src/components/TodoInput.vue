<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <!-- <button >add</button> -->
    
      <span class="addContainer" @:click="addTodo">
        <i class="fa-solid fa-plus addBtn"></i>
        
      </span>


      <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>경고</h3>
        <i class="fa-solid fa-circle-xmark closeModalBtn" @click="showModal = false"></i>
      </template>
      <template #body>
        <h3>무언가를 입력하세요.</h3>
      </template>
      <template #footer>
        <h3>copy right</h3>
      </template>
    </modal>


  </div>
</template>

<script>
  import Modal from './common/Modal.vue'
  export default {
    data(){
      return{
        newTodoItem: "",
        showModal:false
        
      }
    },
    methods:{
      addTodo(){
        // console.log(this.newTodoItem)
        //저장하는 로직
        if(this.newTodoItem !== ''){
          this.$emit('addTodoItem', this.newTodoItem)
          this.clearIntut();
        }else{
          this.showModal = !this.showModal;
        }
      },
      clearIntut(){
        this.newTodoItem = "";
      },
      
    },
    components: {
        Modal
       },
 
  }
</script>

<style scoped>
input:focus{
  outline:none;
}

.inputBox{
  background:white;
  height:50px;
  line-height:50px;
  border-radius: 5px;
}

.inputBox input{
  border-style:none;
  font-size:0.9rem;
}

.addContainerBox{
  width:100%;
  
}

.addContainer {
  float:right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width:3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn{
  color: white;
  vertical-align:middle;
}

.closeModalBtn{
  color: #42b983;
}


</style>