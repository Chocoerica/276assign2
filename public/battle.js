// JavaScript source code
//BATTLE
var displayres = document.getElementById('result');
if (rows[0].total == rows[1].total) {
    displayres.innerHTML = "THERE IS A TIE";
}
else if (rows[0].total > rows[1].total) {
    displayres.innerHTML = "0 wins";
}
else {
    displayres.innerHTML = "1 wins";
}