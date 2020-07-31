<template>
  <div class="box">
    <ul>
      <li v-for="(type,index) in types" :key="index" @click="fn(type)">{{type}}</li>
     <!-- <li>精选特卖</li>
     <li>食品自提</li>
     <li>甜品饰品</li>
     <li>火锅</li>
     <li>中餐</li>
     <li>水果</li>
     <li>饮料</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "Bnav",
  data(){
    return {
      types:["精选特卖","食品自提","甜品饰品","火锅","中餐","水果","饮料"]
    }
  },
  methods:{
    fn(type){
      this.$emit("changetype",type);
    }
  }
};
</script>

<style scoped="scoped">
.box {
  width: 100%;
  height: 1.70rem;
  /* background-color: #ffffff; */
  overflow-y: hidden;
  /* white-space: nowrap; */
  overflow: auto;
  background: #cccccc;
}
 .box ul {
  width: 200%;
  height: 1.6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.box ul li {
  color: #333333;
  font-size: 20px;
}
</style>