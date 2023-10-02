"use strict"

class Pokeball{
    
    #pokemon = "";

    constructor(pokemon = ""){
        this.pokemon = pokemon;
    }

    throwPokemon(pokemon){
        if(isEmpty()){
            this.pokemon = pokemon;
            console.log("Caught ",this.pokemon.name);
        }
    }

    isEmpty(){
        if(this.pokemon === ""){
            return true;
        }
        return false;
    }

    contains(){
        return this.pokemon.name !== "" ? this.pokemon.name : "empty ...";
    }

}

module.exports = { Pokeball };