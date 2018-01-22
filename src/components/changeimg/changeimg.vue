<template>
  <div id="changeimg">
    <div id="changeimg-select">
      <input type="file" value="从相册选择"/>
      <input type="button" value="取 消"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'changeimg',
  data () {
    return {
      msg: ''
    }
  }
}
</script>
<style scoped>
  *{
    padding:0;margin:0;
  }
  #changeimg{
    position:absolute;left:0;top:0;
    width:100%;
    height:100%;
    background-color:#000;
    opacity:0.5;
  }
  #changeimg-select{
    width:100%;
    height:400px;
    display:flex;
    justify-content:center;
    align-items:flex-end;
  }
  #changeimg-select input{
    width:200px;
    height:80px;
    font-size:30px;
    font-weight: bold;
    /*background-color: #ff0000;*/
  }
</style>
