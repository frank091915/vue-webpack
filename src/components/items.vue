<template>
  <div :class="['todo-item', todo.completed ? 'completed' : '']">
    <input
        type="checkbox"
        v-model="todo.completed"
        class="toggle"
    >
    <label for="">{{todo.content}}</label>
    <button class="delete" @click="deleteTodo"></button>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
export default {
//import引入的组件需要注入到对象中才能使用
  props:{
    todo:{
      required:true,
      type:Object
    }
  },
  components: {},
  data() {
//这里存放数据
    return {};
  },
//监听属性 类似于data概念
  computed: {},
//监控data中的数据变化
  watch: {},
//方法集合
  methods: {
    deleteTodo(){
      this.$emit('deleteItem',this.todo.id)
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
<style lang="stylus" scoped>
  /* @import url(); 引入公共css类*/
  .todo-item
    position relative
    background #ffffff
    font-size 24px
    border-bottom 1px solid rgba(0,0,0,.06)
    &:hover
      .delete:after
        content: 'x'
    label
      white-space pre-line
      word-break break-all
      padding 15px 60px 15px 15px
      margin-left 45px
      display block
      line-height 1.2
      transition color 0.4s
  &.completed
    label
      color #d9d9d9
      text-decoration line-through
  .toggle
    text-align center
    width 400px
    height 40px
    position absolute
    top 0
    bottom 0
    margin auto 0
    border none
    outline none
    appearance none
  .delete
    position absolute
    top calc(50% - 12px)
    right 10px
    font-size 18px
    text-align center
    line-height: 18px
</style>