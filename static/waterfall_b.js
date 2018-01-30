// // window.onload = function () {
// //   waterfall('waterfall1', 'waterfall1_box')
// //   // let data = [{'src': 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg'}, {'src': 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg'},
// //   //   {'src': 'http://www.quanjing.com/image/2017index/lx3.png'}, {'src': 'http://img02.tooopen.com/images/20151229/tooopen_sy_153049663495.jpg'},
// //   //   {'src': 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg'}, {'src': 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg'},
// //   //   {'src': 'http://www.quanjing.com/image/2017index/lx3.png'}, {'src': 'http://img02.tooopen.com/images/20151229/tooopen_sy_153049663495.jpg'},
// //   //   {'src': 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg'}, {'src': 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg'},
// //   //   {'src': 'http://www.quanjing.com/image/2017index/lx3.png'}, {'src': 'http://img02.tooopen.com/images/20151229/tooopen_sy_153049663495.jpg'}
// //   // ]
// //   window.onscroll = function () {
// //     if (checkScrollSite()) {
// //       $.ajax({
// //         type: 'GET',
// //         url: 'https://easy-mock.com/mock/5a6a99c0396ee930b9c4b92f',
// //         data: '',
// //         dataType: 'json',
// //         success: function (data) {
// //           let oParent = document.getElementById('waterfall1')
// //           for (i in data) {
// //             let oPin = document.createElement('div')
// //             oPin.className = 'waterfall1_box'
// //             oParent.appendChild(oPin)
// //             let oBox = document.createElement('div')
// //             oBox.className = 'box_img'
// //             oPin.appendChild(oBox)
// //             let oImg = document.createElement('img')
// //             oImg.src = data[i].src
// //             oBox.appendChild(oImg)
// //           }
// //           waterfall('waterfall1', 'waterfall1_box')
// //         }
// //       })
// //     }
// //   }
// // }
//
// /*
// parent 父级  id
// * pin 具体的瀑布流块 class类名
// * */
// function waterfall (parent, pin) {
//   let oParent = document.getElementById(parent)
//   let aPin = getClassObj(oParent, pin)
//   let iPinW = aPin[0].offsetWidth
//   let num = Math.floor(document.documentElement.clientWidth / iPinW)
//   oParent.style.cssText = 'width:' + num * iPinW + 'px;margin:0 auto'
//
//   let compareAarr = []
//   // var str = [];
//   for (let i = 0; i < aPin.length; i++) {
//     if (i < num) {
//       compareAarr[i] = aPin[i].offsetHeight
//     } else {
//       let minH = Math.min.apply({}, compareAarr)
//       let minKey = getMinKey(compareAarr, minH)
//       aPin[i].style.position = 'absolute'
//       aPin[i].style.top = minH + 'px'
//       aPin[i].style.left = aPin[minKey].offsetLeft + 'px'
//       compareAarr[minKey] += aPin[i].offsetHeight
//     }
//     // str += i+'=>'+aPin[i].offsetHeight+'\n';
//   }
//   // for(var i=num;i<aPin.length;i++){
//   //     aPin[i].style.position = 'absolute';
//   //     drag(aPin[i]);
//   // }
//
//   // //添加元素
//   // compareAarr[minKey] += aPin[num].offsetHeight
//   // var minH = Math.min.apply({}, compareAarr);
//   // var minKey = getMinKey(compareAarr, minH);
//   // aPin[num+1].style.position = 'absolute';
//   // aPin[num+1].style.top = minH + 'px';
//   // aPin[num+1].style.left = aPin[minKey].offsetLeft + 'px';
// }
//
// function checkScrollSite () {
//   let oParent = document.getElementById('waterfall1')
//   let aPin = getClassObj(oParent, 'waterfall1_box')
//   let lastPinH = aPin[aPin.length - 1].offsetTop + Math.floor(aPin[aPin.length - 1].offsetHeight / 2)
//   let srcollTop = document.documentElement.scrollTop || document.body.scrollTop
//   let documentH = document.documentElement.clientHeight
//   if (lastPinH < srcollTop + documentH) {
//     return true
//   } else {
//     return false
//   }
//   // return (lastPinH < srcollTop + documentH)? true : false;
// }
//
// /*
// * 获取数组最小值的键值
// * */
// function getMinKey (arr, minH) {
//   for (key in arr) {
//     if (arr[key] === minH) {
//       return key
//     }
//   }
// }
//
// /*
// * 通过class提取元素
// * */
// function getClassObj (parent, className) {
//   let obj = parent.getElementsByTagName('*')
//   let result = []
//   for (let i = 0; i < obj.length; i++) {
//     if (obj[i].className === className) {
//       result.push(obj[i])
//     }
//   }
//   return result
// }
