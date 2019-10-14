// JavaScript source code
//Selecting the tokimon to battle

//Clicking on the div will select it, or unselect it
//Only two can be selected
//The two who have been selected will be recorded

for (let i = 0; i < tokis.length - 1; i++) {
    tokis[i].addEventListener('click', function () {
        clicked(i);
    });
    
}

function clicked(i) {
    //clicking on a div: first check if the clicked thing has already been selected
    //if yes, toggle off, 
    //otherwise check if 2 have already been selected
    //if two have already been selected, do nothing
    //else: toggle on
    
    return;
}

//another function for if battle button is pressed
//check if two have been selected, if yes, post/submit form
//otherwise, return false