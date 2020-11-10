

document.getElementById("button").onclick = function() {
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;

  var select= document.getElementById( "selectbox" ) ;
  var num= select.selectedIndex;
  var age= select.options[num].value;


  // form要素を取得
  var element = document.getElementById( "radio-buttons" ) ;
  var radioNodeList = element.radio;
  // 選択状態の値(value)を取得 (男性が選択状態なら"male"が返る)
  var sex = radioNodeList.value ;

  // 標準体重計算式の係数
  let boy_a = {5: 0.386, 6:0.461, 7:0.513, 8:0.592, 9:0.687, 10:0.752, 11:0.782, 12:0.783, 13:0.815, 14:0.832, 15:0.766, 16:0.656, 17:0.672}
  let boy_b = {5: 23.699, 6:32.382, 7:38.878, 8:48.804, 9:61.390, 10:70.461, 11:75.106, 12:75.642, 13:81.348, 14:83.695, 15:70.989, 16:51.822, 17:53.642}
  let girl_a = {5: 0.377, 6:0.458, 7:0.508, 8:0.561, 9:0.652, 10:0.730, 11:0.803, 12:0.796, 13:0.655, 14:0.594, 15:0.560, 16:0.578, 17:0.598}
  let girl_b = {5: 22.750, 6:32.079, 7:38.367, 8:45.006, 9:56.992, 10:68.091, 11:78.846, 12:76.934, 13:54.234, 14:43.264, 15:37.002, 16:39.057, 17:42.339}

  var boy_stdwt= (boy_a[age])*height-(boy_b[age])
  var girl_stdwt= (girl_a[age])*height-(girl_b[age])

  if (sex== "male"){
    document.getElementById("answer").innerHTML= "標準体重="+boy_stdwt.toFixed(2)+"(kg)<br>"
    +"標準体重比="+(weight/boy_stdwt*100).toFixed(2)+"%";




  } else{
    document.getElementById("answer").innerHTML= "標準体重="+girl_stdwt.toFixed(2)+"(kg)<br>"
    +"標準体重比="+(weight/girl_stdwt*100).toFixed(2)+"%";

    ;
  }
};
