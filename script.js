
let submitButton = document.getElementById('submit-data-button');
submitButton.addEventListener('click', submitButtonPress);

let player_list = document.getElementById('player-list');
//const squad1 = new Squad();
let squad = new Squad();


function submitButtonPress(){
    let position = document.getElementById('position').value.toUpperCase();
    let club = document.getElementById("club").value;
    let nation = document.getElementById('nation').value;
    let playerName = document.getElementById('player-name').value;
    let league = document.getElementById('league').value;
    
    
    let player = new Player(position, club, nation, playerName, league);
    
    //const squad = new Squad();
    squad.addPlayer(player);
    //squad.addPlayer(player);
    //squad1.addPlayer(player);
    

    //const player_name = document.createElement('li');
    //player_name.textContent = playerName;
    //player_list.append(player_name);
    squad.updatePlayersInList();
    //alert(squad.listPlayers());
    //squad.alertPlayers();
    //squad1.alertPlayers();
    squad.calculateSquadChemistry();
}





