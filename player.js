//Defines a player object. The data from player create is used to construct a new player object

class Player{
    constructor(position, club, nation, playerName){
        this.position = position;
        this.club = club;
        this.nation = nation;
        this.playerName = playerName;
    }

    getPosition(){
        return this.position;

    }

    setPosition( newPosition ){
        this.position = newPosition;
    }

    getClub(){
        return this.club;
    }

    setClub( newClub ){
        this.club = newClub;
    }

    getNation(){
        return this.nation;
    }

    setNation( newNation ){
        this.nation = newNation;
    }

    getPlayerName(){
        return this.playerName;
    }

    setPlayerName( newPlayerName ){
        this.playerName = newPlayerName;
    }

    toString(){
        return 'My name is ${this.getPlayerName}';
    }
}