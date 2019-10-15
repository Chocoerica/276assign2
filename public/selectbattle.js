// JavaScript source code
//Selecting the tokimon to battle

//Clicking on the div will select it, or unselect it
//Only two can be selected
//The two who have been selected will be recorded
var tokis = document.getElementsByClassName("select");
for (let i = 0; i < tokis.length ; i++) {
    tokis[i].addEventListener('click', function () {
        clicked(i);
    });
    
}

function clicked(i) {
    //clicking on a div: first check if the clicked thing has already been selected
    console.log(`clicked, ${i}`);
    divelements = document.querySelectorAll(".select");
    var divelement = divelements.item(i);
    if (divelement.classList.contains('on')) { //if yes, toggle off, 
        divelement.classList.toggle('on');
    }
    else { //otherwise check if 2 have already been selected
        var Selected = document.getElementsByClassName('on');
        if (Selected.length >= 2) { //if two have already been selected, do nothing
        }
        else {
            divelement.classList.toggle('on'); //else: toggle on
        }
    }
    return;
}
//another function for if battle button is pressed
function check(){
    var Selected = document.getElementsByClassName('on');
    if (Selected.length == 2) { //check if 2 have been selected
        //if yes, get id of the two with class on and post/submit form
        var inside0 = Selected[0].children[5].innerHTML;
        var inside1 = Selected[1].children[5].innerHTML;
        console.log(`${inside0}, ${inside1}`);
        //edit hidden inputs
        document.getElementById('sid1').value = inside0;
        document.getElementById('sid2').value = inside1;
        document.getElementById('form').submit();
    }
    else { //otherwise, return false --> don't submit form
        return false;
    }
}

