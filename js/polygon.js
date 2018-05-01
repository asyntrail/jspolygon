function count_f() {


    function randomRange(myMin, myMax) {
        return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    }



    var myRandom = randomRange(2, 9);
    var secondRandom = randomRange(2, 9);
    var a = myRandom + '*' + secondRandom;
    var c = "";
    document.getElementById('target').innerHTML = a;
    document.getElementById('result').innerHTML = c;
    document.getElementById('expression').value = "";
    expression.className = "result2";
    next.innerHTML = "Next"
    document.getElementById("expression").focus();



    function check() {

        var b = myRandom * secondRandom;

        var expr = document.getElementById('expression').value;
        if (expr == b) {
            expression.className = "result";
            result.innerHTML = 'Yes, result is: ' + b
        } else {
            expression.className = "result1";
            result.innerHTML = 'No, result is: ' + b

        }
    };


    document.getElementById("expression")
        .addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                check();


            }
        });

}


document.getElementById('next').addEventListener('click', count_f);