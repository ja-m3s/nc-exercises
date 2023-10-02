"use strict";

/**
A Pokemon will need to have the following properties:

    name: the name its given
    hitPoints: the amount of health the Pokemon has, represented as a number
    attackDamage: the amount of damage a Pokemon can inflict (should be a number)
    move: This is the move the Pokemon does when battling, this should default to "tackle"
*/

class Pokemon {
    #name = "";
    #hitPoints ="";
    #attackDamage; 
    #move;
    #type;

  constructor() {
    this.#name = 'Pokemon';
    this.#hitPoints = 100;
    this.#attackDamage = 20;
    this.#move = 'Tackle'
    this.#type = 'normal'
  }

  constructor(name,hitPoints,attackDamage,move = 'Tackle',type) {
    this.#name = name;
    this.#hitPoints = hitPoints;
    this.#attackDamage = attackDamage;
    this.#move = move;
    this.#type = type;
  }

  takeDamage(attack){
    this.#hitPoints= this.#hitpoints - attack;
  }

  useMove(){
    console.log(this.#name,' used ',this.#move,'.')
    return this.#attackDamage;
  }

  hasFainted(){
    return this.#hitPoints === 0;  
  }

  getType(){ return this.#type; }
 
  isEffectiveAgainst(pokemon){
     const strongAgainst = new Map()
    strongAgainst.set('water','fire')
    strongAgainst.set('fire','grass')
    strongAgainst.set('grass','fire')
    //strongAgainst.set('normal','')
    
    if(pokemon.getType() === strongAgainst.get(this.type)) {
        return true;
    }
    return false;
  }


  isWeakTo(pokemon){
    const weakAgainst = new Map()
    weakAgainst.set('fire','water')
    weakAgainst.set('grass','fire')
    weakAgainst.set('water','grass')
    //weakAgainst.set('normal','')
    
    if(pokemon.getType() === weakAgainst.get(this.type)) {
        return true;
    }
    return false;
  }
}

class FirePokemon extends Pokemon{
  constructor(name,hitPoints,attackDamage,move = 'Tackle') {
    super(name,hitPoints,attackDamage,move,'fire')
  }
}

class GrassPokemon extends Pokemon{
  constructor(name,hitPoints,attackDamage,move = 'Tackle') {
    super(name,hitPoints,attackDamage,move,'grass')  
  }
}

class WaterPokemon extends Pokemon{
  constructor(name,hitPoints,attackDamage,move = 'Tackle') {
    super(name,hitPoints,attackDamage,move,'water')  
  }
}


class Charmander extends FirePokemon {
  constructor(name, hitPoints, attackDamage) {
    super(name, hitPoints, attackDamage,'fire blast',"Ember");
  }
}

class Squirtle extends WaterPokemon {
  constructor(name, hitPoints, attackDamage) {
    super(name, hitPoints, attackDamage,"Water Gun");
  }
}

class Bulbasaur extends GrassPokemon {
  constructor(name, hitPoints, attackDamage) {
    super(name, hitPoints, attackDamage,"Vine Whip");
  }
}

class Rattata extends Pokemon {}

module.exports = { Pokemon, WaterPokemon, FirePokemon, GrassPokemon, Rattata, Squirtle, Bulbasaur };