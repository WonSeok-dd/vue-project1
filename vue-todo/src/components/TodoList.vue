<template>
    <section>
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem,index) in this.$store.state.todoApp.todoItems" v-bind:key="todoItem.item" class="shadow">
                <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" aria-hidden="true" 
                    v-on:click="toggleComplete(todoItem)"></i>
                <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
                <span class="removeBtn" @click="removeTodo(todoItem, index)">
                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                </span>
            </li>
        </transition-group>
    </section>
</template>

<script>
export default {
    
    //props : ["propsdata"]

    methods : {
        removeTodo(obj, index){
            //this.$emit("removeTodo", obj, index)
            const payload = {
                obj : obj,
                index : index
            }

            this.$store.commit("removeTodo", payload)
        },

        toggleComplete(obj){
            //this.$emit("toggleComplete", obj)
            this.$store.commit("toggleComplete", obj)
        },


    }
    
}
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }

    li {

        font-family: 'DynaPuff', cursive;
        font-family: 'Karla', sans-serif;
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }

    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }

    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }

    .list-enter , .list-leave-to{
        opacity: 0;
        transform: translateY(30px);
    }

    .textCompleted {
        text-decoration: line-through;
        color: #b3adad;
    }

    .checkBtnCompleted {
        color : #b3adad
    }

</style>