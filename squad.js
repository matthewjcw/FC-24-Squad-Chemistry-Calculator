class Squad{
    

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
    
    printPlayersInList(){
        
    }
}