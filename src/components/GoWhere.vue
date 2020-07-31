<template>
  <div id="box">
    <div class="box1">
      <div class="box1_one" v-for="(img,index) in imgs" :key='index'>
            <img :src="'/static/'+img.data">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoWhere",
    data() {
      return {
        imgs:[
          {
            data:"img/spe.png"
          },
          {
            data:"img/ret.png"
          },
          {
            data:"img/bea.png"
          }
        ]

      }
    }
  }
</script>

<style scoped>
  #box {
    width: 100%;
    height: 1.86rem;
    background-color: #f7f7f7;
    margin-top: 0.25rem;
    padding: 0 0.25rem;
  }

  .box1 {
    width: 100%;
    height: 1.86rem;
    background-color: pink;
    border-radius: 0.15rem;
    display: flex;
    justify-content: space-between
  }
  .box1_one{
    width: 3.2rem;
    height: 100%;
  }
  .box1_one img{
    width: 100%;
    height: 100%;
  }
</style>
