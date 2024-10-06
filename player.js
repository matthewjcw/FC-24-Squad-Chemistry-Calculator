//Defines a player object. The data from player create is used to construct a new player object

class Player{
    #position;
    #name;
    #nation;
    #club;
    #league;

    constructor(position, club, nation, playerName, league){
        this.#position = position;
        this.#club = club;
        this.#nation = nation;
        this.#name = playerName;
        this.#league = league;
    };
    
    get position(){
        return this.#position;
    }

    get name(){
        return this.#name;
    }

    get nation(){
        return this.#nation;
    }

    get club(){
        return this.#club;
    }

    get league(){
        return this.#league;
    }

    toString(){
        return (this.name + " " + this.position + " " + this.nation + " " + this.club + " " + this.league);
    }
}

