<template>
    <div id="add_address">
      <header>
        <img src="../../assets/chooseaddress/arrow.png">
        <p>
          {{title}}
        </p>
        <p id="save_address" @click="save()">
          {{Righttitle}}
        </p>
      </header>
      <footer>
        <form>
          <label>收货人</label>
          <input type="text"/>
          <div class="line"></div>
          <label>联系电话</label>
          <input type="text"/>
          <div class="line"></div>
          <label>所在地区</label>
          <input type="text"/>
          <div class="line"></div>
          <label>街道</label>
          <input type="text"/>
          <div class="line"></div>
          <input type="text" placeholder="请填写详细地址"/>
        </form>
      </footer>
    </div>
</template>

<script>
export default {
  name: 'add_address',
  data () {
    return {
      title: '新增收货地址',
      Righttitle: '保存'
    }
  },
  methods: {
    save: function () {
      console.log(3)
      // this.$http.get('http://192.168.0.200:8080/#/index', {})
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../static/Add_Address";
</style>
