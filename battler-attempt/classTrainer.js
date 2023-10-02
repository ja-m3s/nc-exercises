/*
Trainer

    A Trainer should have a belt property which can store up to 6 Pokeballs. The datatype of the belt is up to you to decide.

Methods

catch

    Takes a Pokemon as an argument.
    It should use one of its empty Pokeball's throw method to catch the Pokemon.
    Should do something if you don't have any empty Pokeballs, what and how is up to you.

getPokemon

    Takes the name of a Pokemon.
    Will search for the the Pokemon with that name in the belt.
    Use the Pokeball's throw to return that specific Pokemon.
*/

class Trainer {
    #belt = "";

    constructor(belt){
        this.#belt = belt;
    }

    catchPokemon(pokemon){
        return true;
    }
    getPokemon(name){
        return true;
    }
}

module.exports = { Trainer };