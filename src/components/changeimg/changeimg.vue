<template>
  <div id="changeimg">
    <form id="changeimg-select">
      <input type="file" value="从相册选择" size="1000" id="change1"/>
      <input type="reset" value="取 消"/>
    </form>
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
</style>
