//Variables

//accesses the title text
let titleText = document.getElementsByTagName('h1')[0];




//Functions

//creates a shadow over the title text of the page
function createTitleShadow(){
    titleText.style.textShadow = "2px 2px 45px gold";
}

//removes the shadow from the title of the page
function removeTitleShadow(){
    titleText.style.textShadow = "";
}

//Allows the text shadow to activate on mouseover, shadow is removed with mouseout
document.getElementById('title').addEventListener('mouseover', createTitleShadow);
document.getElementById('title').addEventListener('mouseout', removeTitleShadow);
