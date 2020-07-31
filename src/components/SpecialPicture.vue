<template>
  <div id="box">
    <div class="box_one">
      <img src="../assets/img/qianggou.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: "SpecialPicture",
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  #box {
    width: 100%;
    height: 1.6rem;
    padding: 0 0.25rem;
    margin-top: 0.2rem;
    background-color: #f2f2f2;
  }

  .box_one {
    width: 100%;
    height: 100%;
  }

  .box_one img {
    width: 100%;
    height: 100%;
  }
</style>
