//Defines a player object. The data from player create is used to construct a new player object

class Player{
    #position;
    #name;
    #nation;
    #club;

    constructor(position, club, nation, playerName){
        this.#position = position;
        this.#club = club;
        this.#nation = nation;
        this.#name = playerName;
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

    toString(){
        return ("My name is " + this.name);
    }
}

