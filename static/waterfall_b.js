window.onload = function () {
  waterfall('waterfall1', 'waterfall1_box')
  // window.onscroll = function () {
  //   var oParent = document.getElementById('waterfall1');
  //   var oPin = document.createElement('div');
  // oParent.appendChild(oPin);
  // var oBox = document.createElement('div');
  // oBox.className = 'box';
  // var oImg = document.createElement('img');
  // oImg.src = data[i].src;
  // oBox.appendChild(oImg);
}
/*
parent 父级  id
* pin 具体的瀑布流块 class类名
* */
function waterfall (parent, pin) {
  let oParent = document.getElementById(parent)
  let aPin = getClassObj(oParent, pin)
  let iPinW = aPin[0].offsetWidth
  let num = Math.floor(document.documentElement.clientWidth / iPinW)
  oParent.style.cssText = 'width:' + num * iPinW + 'px;margin:0 auto'

  let compareAarr = []
  // var str = [];
  for (let i = 0; i < aPin.length; i++) {
    if (i < num) compareAarr[i] = aPin[i].offsetHeight
    else {
      let minH = Math.min.apply({}, compareAarr)
      let minKey = getMinKey(compareAarr, minH)
      aPin[i].style.position = 'absolute'
      aPin[i].style.top = 150 + minH + 'px'
      aPin[i].style.left = aPin[minKey].offsetLeft + 'px'
      compareAarr[minKey] += aPin[i].offsetHeight
    }
    // str += i+'=>'+aPin[i].offsetHeight+'\n';
  }
  // //添加元素
  // compareAarr[minKey] += aPin[num].offsetHeight
  // var minH = Math.min.apply({}, compareAarr);
  // var minKey = getMinKey(compareAarr, minH);
  // aPin[num+1].style.position = 'absolute';
  // aPin[num+1].style.top = minH + 'px';
  // aPin[num+1].style.left = aPin[minKey].offsetLeft + 'px';
}
/*
* 获取数组最小值的键值
* */
function getMinKey (arr, minH) {
  let key
  for (key in arr) {
    if (arr[key] === minH) {
      return key
    }
  }
}
/*
* 通过class提取元素
* */
function getClassObj (parent, className) {
  let obj = parent.getElementsByTagName('*')
  let result = []
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].className === className) {
      result.push(obj[i])
    }
  }
  return result
}
