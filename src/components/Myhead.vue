<template>
  <div class="box1">
    <div>
      <div class="block">
        <el-avatar shape="square" :size="60" :src="squareUrl"></el-avatar>
      </div>
      <div class="block1">
        <span>小小</span>
        <div class="tel">182******36</div>
      </div>
    </div>
    <!-- <div  class="block2"> -->
    <i class="el-icon-arrow-right"></i>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "Myhead",
  data() {
    return {
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    };
  },
};
</script>

<style scoped="scoped">
.box1 {
  width: 100%;
  height: 1.48rem;
  background: #1678ff;
  display: flex;
  justify-content: space-between; /*盒子并排排列 */
}
.box1 > div{
    width: 100%;
    display: flex;
}
.block {
   padding-left: 0.35rem;
}
.block1 {
  width: 1.5rem;
  height: 1rem;
  padding-left: 0.3rem;
  font-size: 14px;
}
.block1 > span {
  color: #e8f1f2;
}
.tel {
  width: 1.55rem;
  background: #2780ff;
  font-size: 0.02rem;
  height: 0.4rem;
  border-radius: 0.28rem;
  line-height: 0.44rem;
  text-align: center;
  margin-top: 0.26rem;
  border: 1px solid #3f92fe;
  color: #a5d0fd;
}
.el-icon-arrow-right {
  display: block;
  color: #fffffe;
  font-size: 25px;
  /* margin-left: 3.5rem; */
  line-height: 1.35rem;
  padding-right: 0.25rem;
}
</style>