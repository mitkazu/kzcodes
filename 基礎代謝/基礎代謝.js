

document.getElementById("button").onclick = function() {
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  var age = document.getElementById("age").value;


  // form要素を取得
  var element = document.getElementById( "gender-select" ) ;
  var radioNodeList = element.radio;
  var sex = radioNodeList.value ;

  var kyoudo = document.getElementById( "strength" ) ;
  console.log(kyoudo)
  var radioList = kyoudo.str;
  var strength = radioList.value ;

  var male_hb = 66.5+ weight*13.8+ height*5-age*6.8
  var female_hb = 655+ weight*9.6+ height*1.8-age*4.7
  var male_sh = 17.69*weight+ 658
  var female_sh = 13.38*weight+ 693

  if (sex== "male"){
    if (age>="18"){
    document.getElementById("answer").innerHTML= "Harris-Benedictの式を適用<br>基礎代謝="+male_hb.toFixed(0)+"(kcal)<br>"
    +"エネルギー所要量="+(male_hb*strength).toFixed(0)+"(kcal)";
  }else{
    document.getElementById("answer").innerHTML= "Scofield式を適用<br>基礎代謝="+male_sh.toFixed(0)+"(kcal)<br>"
    +"エネルギー所要量="+(male_sh*strength).toFixed(0)+"(kcal)";
  }



  } else{
    if (age>="18"){
    document.getElementById("answer").innerHTML= "Harris-Benedictの式を適用<br>基礎代謝="+female_hb.toFixed(0)+"(kcal)<br>"
    +"エネルギー所要量="+(female_hb*strength).toFixed(0)+"(kcal)";
  }else{
    document.getElementById("answer").innerHTML= "Scofield式を適用<br>基礎代謝="+female_sh.toFixed(0)+"(kcal)<br>"
    +"エネルギー所要量="+(female_sh*strength).toFixed(0)+"(kcal)";
  }

    ;
  }
};
