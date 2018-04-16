function count_f() {


function randomRange(myMin, myMax) {
      return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(0, 100);
var secondRandom = randomRange(0, 100);
var a = myRandom+'+'+secondRandom;
var c="";
var expr="aa";
document.getElementById('target').innerHTML = a;
document.getElementById('result').innerHTML = c;
document.getElementById('expression').value = "";
expression.className  = "result2";
next.innerHTML = "Next";


expression.onblur = function() {
  var b=myRandom+secondRandom;

  var expr = document.getElementById('expression').value;
  if (expr==b) {
   expression.className  = "result";
    result.innerHTML = 'Yes, result is: '+b
  }
  else{
    this.className = "result1";
    result.innerHTML = 'No, result is: '+b

  }
};


}

document.getElementById('next').addEventListener('click', count_f);