<template>
  <div id="inputWrapper">
      <input id="input"
             type="text"
             autofocus="autofocus"
             placeholder="接下来要做些什么呢"
             @keydown.enter="addTodo"
             v-model="todoContent"
      >
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';

  export default {
//import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
//这里存放数据
      return {
        todoContent:''
      };
    },
//监听属性 类似于data概念
    computed: {},
//监控data中的数据变化
    watch: {},
//方法集合
    methods: {
      addTodo(){
        this.$emit('addTodo',this.todoContent)
        this.todoContent=''
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

#input
  position relative
  width 100%
  font-size 24px
  font-family inherit
  font-weight inherit
  line-height 1.4em
  outline none
  color inherit
  padding 6px
  border 1px solid #999
  box-shadow inset 0 -1px 5px 0 rgba(0, 0, 0, .5)
  box-sizing border-box
  padding 16px 16px 16px 60px
</style>