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
}