// JavaScript source code
//BATTLE
var totals = document.getElementsByClassName('sid');
var names = document.getElementsByClassName('name');
var displayres = document.getElementById('result');

document.getElementById("container").addEventListener('click', function () {
    console.log("battle javascript");
    BattleAnimation();
    setTimeout(function () {
        if (totals[0].innerHTML == totals[1].innerHTML) {
            console.log('==');
            displayres.innerHTML = "THERE IS A TIE!";
        }
        else if (totals[0].innerHTML > totals[1].innerHTML) {
            console.log('>');
            displayres.innerHTML = `${names[0].innerHTML} wins!`;
        }
        else {
            console.log('<');
            displayres.innerHTML = `${names[1].innerHTML} wins!`;
        }
    }, 3000);
});
function BattleAnimation() {
    console.log("battle start");
    var rightelem = document.getElementById("right");
    var leftelem = document.getElementById("left");
    var pos = 0;
    var start = Date.now();
    var time = setInterval(function(){
        var timepassed = Date.now() - start;
        
        if (timepassed >= 3000) {
            clearInterval(time);
            return;
        }
        if (timepassed < 2000) {
            //get closer to eachother
            rightelem.style.right = timepassed / 5 + 'px';
            leftelem.style.left = timepassed / 5 + 'px';
        }
        else {
            // timepassed - 2000 to 4000 
            //position - 400 to 0
            //console.log(`${400-(timepassed/5)}`);
            rightelem.style.right = 400- ((timepassed-2000) / 5) + 'px';
            leftelem.style.left = 400 - ((timepassed - 2000) / 5) + 'px';
        }
    }, 20);
}



