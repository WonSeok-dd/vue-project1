<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue"
import TodoInput from "./components/TodoInput.vue"
import TodoList from "./components/TodoList.vue"
import TodoFooter from "./components/TodoFooter.vue"
 
export default {

  data(){
    return {
      //todoItems : []
    }
  },

  created(){
    //  if (localStorage.length > 0){
    //      for (let i=0; i< localStorage.length; i++){
    //          let JsonStr = localStorage.getItem(localStorage.key(i))
    //          this.todoItems.push(JSON.parse(JsonStr));
    //      }
    //  }
  },

  methods : {
    //addTodo(obj){
    //  //obj -> {completed: false, item: value}
    //  //JSON.stringify 하는 이유는 값을봤을때 obj라 떠서 정보를 모름
    //  localStorage.setItem(obj.item, JSON.stringify(obj));
    //  this.todoItems.push(obj)
    //},

    //clearAll(){
    //  localStorage.clear()
    //  this.todoItems = []
    //},

    //removeTodo(obj, index){
    //  localStorage.removeItem(obj.item);
    //  this.todoItems.splice(index,1)
    //},

    //toggleComplete(obj){
    //  //해당 객체 체크하기
    //  obj.completed = !obj.completed;
          
        //해당 객체 LocalStorage갱신
        //체크 전 삭제 뒤 체크 후로 다시 추가
    //  localStorage.removeItem(obj.item);
    //  localStorage.setItem(obj.item, JSON.stringify(obj))
    //}
    
  },

  components : {
    "TodoHeader" : TodoHeader,
    "TodoInput" : TodoInput,
    "TodoList" : TodoList,
    "TodoFooter" : TodoFooter
  }
  
}
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  button {
    border-style: groove;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
  }

</style>