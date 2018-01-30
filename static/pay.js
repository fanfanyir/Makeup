window.onload = function () {
  let Totalmoney = document.getElementById('total_money')
  let aPrice = document.getElementsByClassName('price')
  let aNumber = document.getElementsByClassName('goods_number')
  let str = 0
  for (let i = 0; i < aPrice.length; i++) {
    str += parseFloat(aPrice[i].innerHTML) * parseFloat(aNumber[i].innerHTML)
  }
  Totalmoney.innerHTML = str + '元'
}
