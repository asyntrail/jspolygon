
window.onload = function(){
var sc =0;



function count_f() {
document.getElementById('score').innerHTML =sc;
//функция генерации рандомных чмсел
    function randomRange(myMin, myMax) {
        return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    }
var arr = [1, 10];
var arr2 = [1, 100];
var arr3 = [1, 1000];
var [r1,r2] = arr;
var [r3,r4] = arr2;
var [r5,r6] = arr3;



    if (document.getElementById('one').checked){
     myRandom = randomRange(r1, r2);
     secondRandom = randomRange(r1, r2);
    } else if  (document.getElementById('ten').checked){
     myRandom = randomRange(r3, r4);
     secondRandom = randomRange(r3, r4);
    } else if  (document.getElementById('hundreds').checked){
     myRandom = randomRange(r5, r6);
     secondRandom = randomRange(r5, r6);
    }


    //document.getElementById('hint').innerHTML = "";
    document.getElementById('expression').value = "";
   expression.className = "result2";
     next.innerHTML = "Next";
    document.getElementById("expression").focus();



    if (document.getElementById('plus').checked){
         a = myRandom + '+' + secondRandom;
         b = myRandom + secondRandom;
    } else if (document.getElementById('minus').checked){
        a = myRandom + '-' + secondRandom;
        b = myRandom - secondRandom;
    } else if (document.getElementById('multiple').checked){
        a = myRandom + '*' + secondRandom;
        b = myRandom * secondRandom;
    }

    document.getElementById('target').innerHTML = a;
    document.getElementById('hint').innerHTML =" Press enter to check";
//фунцкия проверки выражения
    function check() {
        var expr = document.getElementById('expression').value;
        if (expr == b) {
            expression.className = "result";
            hint.innerHTML = 'Yes, result is: ' + b;
            sc = sc+1;
            document.getElementById('score').innerHTML =sc;

        } else if (expr === ""){
           alert("Enter the value");
        }
        else {
            expression.className = "result1";
            hint.innerHTML = 'No, result is: ' + b;

        }
    }

//блок кода запускающий функцию проверки по клавише
    document.getElementById("expression")
        .addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                check();
            }
        });

}


document.getElementById('next').addEventListener('click', count_f);


};

