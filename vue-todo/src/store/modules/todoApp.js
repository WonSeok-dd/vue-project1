let storage = {
    fetch(){
        const arr = [];
        if (localStorage.length > 0){
            for (let i=0; i< localStorage.length; i++){
                let JsonStr = localStorage.getItem(localStorage.key(i))
                arr.push(JSON.parse(JsonStr));
            }
        }
        return arr;
    }
};

const state = {
    headerText : "TODO it!",
    todoItems : storage.fetch()
};

const getters = {
    getheaderText(state){
        return state.headerText;
    }
};

const mutations = {
    addTodo(state,obj){
        //obj -> {completed: false, item: value}
        //JSON.stringify 하는 이유는 값을봤을때 obj라 떠서 정보를 모름
        localStorage.setItem(obj.item, JSON.stringify(obj));
        state.todoItems.push(obj)
    },

    clearAll(state){
        localStorage.clear()
        state.todoItems = []
    },
  
    removeTodo(state, payload){
        // payload -> {obj: obj, index: index}
        console.log(payload.obj.item, payload.index, state.todoItems)
        localStorage.removeItem(payload.obj.item);
        state.todoItems.splice(payload.index,1)
    },

    toggleComplete(state, obj){
        //해당 객체 체크하기
        obj.completed = !obj.completed;
        
        //해당 객체 LocalStorage갱신
        //체크 전 삭제 뒤 체크 후로 다시 추가
        localStorage.removeItem(obj.item);
        localStorage.setItem(obj.item, JSON.stringify(obj))
    } 
};

export default {
    state : state,
    getters : getters,
    mutations : mutations
}