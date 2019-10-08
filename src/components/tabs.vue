<template>
  <div class="helper">
    <span class="left">{{unCompletedItemLength}} items left</span>
    <span class="tabs">
      <span
          v-for="state in states"
          :key="state"
          :class="[state, filter === state ? 'actived' : '']"
          @click="toggleFilter(state)"
      >{{state}}</span>
    </span>
    <span class="clear" @click="clearAll">Clear All completed</span>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
  props:{
    filter:{
      required:true,
      type:String
    },
    todos:{
      required:true,
      type:Array
    },
  },
  components: {},
  data() {
//这里存放数据
    return {
      states:['all', 'active', 'completed']
    };
  },
//监听属性 类似于data概念
  computed: {
    unCompletedItemLength(){
      return this.todos.filter(item => !item.completed).length
    }
  },
//监控data中的数据变化
  watch: {},
//方法集合
  methods: {
    toggleFilter(state){
      // console.log(state)
      this.$emit('toggle',state)
    },
    clearAll(){
      console.log('clearAll')
      this.$emit('clearAllCompleted')
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
  .helper
    font-weight 100
    display flex
    justify-content space-around
    padding 5px 0
    line-height 30px
    background-color #ffffff
    font-size 14px
    font-smoothing antialiased
  .left,
  .clear,
  .tabs
    padding 0 10px
    box-sizing border-box
  .left,
  .clear
    width 150px
  .left
    text-align left
  .clear
    text-align right
    cursor pointer
  .tabs
    width 200px
    display flex
    justify-content space-around
    *
      display inline-block
      padding 0 10px
      cursor pointer
      border 1px solid rgba(175, 47, 47, 0)
      &.actived
        border-color rgba(175, 47, 47, 0.4)
        border-radius 5px
</style>