

var cre = document.getElementById("cre").value;
var age = document.getElementById("age").value;

// form要素を取得
var element = document.getElementById( "radio" ) ;
// form要素内のラジオボタングループ(name="radio")を取得
var radioNodeList = element.radio ;
// 選択状態の値(value)を取得 (男性が選択状態なら"male"が返る)
var sex = radioNodeList.value ;



document.getElementById("button").onclick = function() {
  console.log("aaaa")
  var male_egfr=194*cre**(-1.094)*age**(-0.287)

  if (sex== "male"){
    document.getElementById("answer").innerHTML= "eGFR="+"mL/min/1.73m2";
  } else{
    document.getElementById("answer").innerHTML= "eGFR="+(male_egfr*0.739)+"mL/min/1.73m2";
  }
};
