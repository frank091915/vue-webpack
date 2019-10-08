<template>
  <div id="todoItem">
    <Input @addTodo="addTodoItem"></Input>
    <TodoItem
        :todo="todo"
        v-for="todo in filteredItems"
        :key="todo.id"
        @deleteItem="deleteTodo"
    />
    <Tabs :filter='filter' @toggle="toggleSelect" :todos="todos" @clearAllCompleted="clearCompleted"></Tabs>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import Input from "./input.vue"
  import TodoItem from "./items.vue"
  import Tabs from "./tabs.vue"

  let id=1;

  export default {
//import引入的组件需要注入到对象中才能使用
  components: {
    Input,
    TodoItem,
    Tabs
  },
  data() {
//这里存放数据
    return {
      todos:[
        {
          id:0,
          completed:false,
          content:'learning'
        },
      ],
      filter:'all'
    };
  },
//监听属性 类似于data概念
  computed: {
    filteredItems(){
      if (this.filter==='all'){
        return this.todos
      }else {
        let filterCondition = this.filter === 'completed';
        return  this.todos.filter(item => item.completed === filterCondition)
      }

    }
  },
//监控data中的数据变化
  watch: {},
//方法集合
  methods: {
    addTodoItem(todoItem){
      // console.log(todoItem)
      this.todos.unshift({
        id:id++,
        content:todoItem,
        completed:false
      })
      // this.$nextTick(()=>{
      //   console.log(this.todos)
      // })
    },
    deleteTodo(id){
      // console.log(id,this.todos)
      this.todos=this.todos.filter((todo)=> {
        // console.log(todo.id == id)
        return todo.id != id
      })
      // this.$nextTick(()=>{
      //   console.log(this.todos)
      // })
    },
    toggleSelect(state){
      this.filter=state
    },
    clearCompleted(){
      this.todos=this.todos.filter(item => !item.completed)
    }
  },
//生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
//生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
  },
  beforeCreate() {
  }, //生命周期 - 创建之前
  beforeMount() {
  }, //生命周期 - 挂载之前
  beforeUpdate() {
  }, //生命周期 - 更新之前
  updated() {
  }, //生命周期 - 更新之后
  beforeDestroy() {
  }, //生命周期 - 销毁之前
  destroyed() {
  }, //生命周期 - 销毁完成
  activated() {
  }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="stylus"  scoped>
  /* @import url(); 引入公共css类*/
#todoItem
  width 500px
  min-height 100px
  margin 20px auto
</style>