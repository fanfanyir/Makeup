<template>
    <div id="choose_address">
      <div id="header">
        <img src='../../assets/chooseaddress/arrow.png'>
        <p>
          {{title}}
        </p>
        <p>
          {{Righttitle}}
        </p>
      </div>
      <div id="footer">
        <div class="address_infor" v-for="item in address" v-bind:key='item in address' >
          <p class="name">{{item.name}}</p>
          <p class="telephone">{{item.telephone}}</p>
          <p class="address" @click="choose(item.id)">{{item.address}}</p>
          <div class="line1"></div>
          <label><input type="checkbox" @click="change(item.id)"/><span>设为默认</span></label>
          <div class="line2"></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'choose_address',
  data () {
    return {
      title: '选择收货地址',
      Righttitle: '新增',
      address: [
        {id: 0, name: '张梦莹', telephone: '17691045044', address: '陕西省西安市长安区西安邮电大学西区4号楼陕西省西安市长安区西安邮电大学西区4号楼'},
        {id: 1, name: '张梦莹', telephone: '17691045044', address: '陕西省西安市长安区西安邮电大学'},
        {id: 2, name: '张梦莹', telephone: '17691045044', address: '陕西省西安市长安区智慧城25号楼'}
      ]
    }
  },
  methods: {
    change: function (m) {
      let aInput = document.getElementsByTagName('input')
      let aSpan = document.getElementsByTagName('span')
      for (let i = 0; i < aInput.length; i++) {
        aInput[i].checked = false
        aSpan[i].innerHTML = '设为默认'
        aSpan[i].style.color = 'black'
      }
      aInput[m].checked = true
      if (aInput[m].checked === true) {
        aSpan[m].innerHTML = '默认地址'
        aSpan[m].style.color = '#f19149'
      }
    },
    choose: function (i) {
      let aAddress = document.getElementsByClassName('address')
      for (let j = 0; j < aAddress.length; j++) {
        aAddress[j].style.backgroundColor = 'white'
      }
      aAddress[i].style.backgroundColor = '#e7e7e7'
    }
  }
}
</script>

<style  lang="scss" scoped>
#choose_address{
  #header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: 100%;
    padding: 0 20px ;
    /*margin-bottom: 20px;*/
    img{
      width: 30px;
      height: 30px;
    }
    p{
      font-size: 30px;
      line-height: 100px;
    }
  }
  #footer{
    background-color: #e7e7e7e7;
    font-size: 25px;
    .address_infor{
      background-color: white;
      padding: 0 20px ;
      margin-bottom: 15px;
      p{
        display: inline-block;
        width: 330px;
        line-height: 80px;
      }
      .telephone{
        text-align: right;
      }
      .address{
        width: 100%;
        line-height: 40px;
      }
      /*input:nth-of-type(1){*/
        /*checked:checked;*/
      /*}*/
      span{
        line-height: 80px;
      }
      .line1{
        height: 3px;
        background-color: #e7e7e7e7;
      }
    }
  }
}
</style>
