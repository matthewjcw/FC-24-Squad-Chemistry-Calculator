//Variables
let squad = new Array(11).fill("Empty Roster Spot");

let submitButton = document.getElementById('submit-data-button');

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

function submitButtonPress(){
    let position = document.getElementById('position').value.toUpperCase();
    let club = document.getElementById("club").value;
    let nation = document.getElementById('nation').value;
    let playerName = document.getElementById('player-name').value;
    

    if(position != "" && club != "" && nation != "" && playerName != ""){
        var newPlayer = new Player(position, club, nation, playerName);
        alert(newPlayer.toString());
        for(let i = 0; i < squad.length; i++){
            if(squad[i] != )
        }
    }
    else{
        alert("Please complete all of the fields");
    }
}

//Allows the text shadow to activate on mouseover, shadow is removed with mouseout
document.getElementById('title').addEventListener('mouseover', createTitleShadow);
document.getElementById('title').addEventListener('mouseout', removeTitleShadow);

submitButton.addEventListener('click', submitButtonPress);
