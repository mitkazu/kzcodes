

document.getElementById("button").onclick = function() {
  var pcr = document.getElementById("pcr").value;
  var pp = document.getElementById("pp").value;
  var ucr = document.getElementById("ucr").value;
  var up = document.getElementById("up").value;
  let trp= (1-ucr*up/(pp*ucr))*100

  document.getElementById("answer").innerHTML= "%TRP="+trp.toFixed(2)+"%";
}
