// JavaScript source code
console.log("homepage.js runs");
var tokis = document.getElementsByClassName("display");
for (let i=0; i<tokis.length -1; i++){
    tokis[i].addEventListener('click', function () {
        console.log(`${i}`);
        functclicked(i);
    });
}

function functclicked(i) {
    //When click, post id
    console.log("click homepage.js");
    idelements = document.querySelectorAll(".sid");
    var idelement = idelements.item(i);
    console.log(`boop: ${idelements}`);
    console.log(`boop: ${idelement} at ${i}`);
    sid= idelement.innerHTML;
    console.log(`boop: ${sid}`);
    document.getElementById("sid").value = `${sid}`;
    var form = document.getElementById("clickprofile");
    form.submit();
    return;
}