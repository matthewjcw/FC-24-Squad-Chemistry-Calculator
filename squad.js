class Squad{
    squadList;
    
    constructor(){
        this.squadList = [];
    }

    

    addPlayer(player){
        if (player instanceof Player)
        {
            this.squadList.push(player);
        }
    }

    listPlayers() {
        return this.squadList;
    }

    alertPlayers(){
        for (let i = 0; i < this.squadList.length; i++) {
            alert(this.squadList[i]);
          }
    }
    
    updatePlayersInList(){
        let player_list = document.getElementById('player-list');
        player_list.innerText = "";
        for (let i = 0; i < this.squadList.length; i++) {
            if(this.squadList[i] instanceof Player){
                const player_name = document.createElement('li');
                player_name.textContent = this.squadList[i];
                player_list.append(player_name);
            }
        }
    }

    calculateSquadChemistry(){
        let total = 0;
        for(let i = 0; i < this.squadList.length; i++){
            for(let j = 0; j < this.squadList.length; j++){
                if(i != j){
                    let player1 = new Player(this.squadList[i]);
                    let player2 = new Player(this.squadList[j]);
                    if(player1.club == player2.club){
                        total += 1;
                    }
                    if(player1.nation == player2.nation){
                        total += 1;
                    }
                    if(player1.league == player2.league){
                        total += 1;
                    }
                }
            }
        }
        const chemPlaceHolder = document.getElementById('chem-place-holder');
        chemPlaceHolder.textContent = 'Squad Chemistry:' + total;
    }
}