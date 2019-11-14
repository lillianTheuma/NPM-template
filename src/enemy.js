class Monster {
  constructor(name, species, level, health, attack) {
    this.species = species,
    this.level = level,
    this.health = health,
    this.attack = attack,
    this.id,
    this.alive = true
  }
  takeDamage(hit) {
    if (hit > this.currentHP) {
      this.currentHP = 0;
      this.die();
    }
    else {
      this.currentHP -= hit;
    }
  }
  die() {
    console.log("I HEV BIN DIFEET, TED");
    this.alive = false;
  }
  spawn() {
    console.log("A KREATIR UPEER'D");
  }
}

//
// class Boss {
//   constructor(name, species, level, health, attack) {
//     this.name = name,
//     this.species = species,
//     this.level = level,
//     this.health = health,
//     this.attack = attack,
//     this.id,
//
//
//   Boss.prototype.theBoss = function() {
//     return this.name + " " + this.species + " "  + this.level + " " + this.health + " " + this.attack;
//   };
//
//
//    var XORGON = new Boss("Xorgon", "Claculator", "", "");
// }
//
//
//
//


 //  STUFF TO USE
  // var whelp = new Monster("whelp", "", "", "");
// USED ALL THE STUFF



// Make a few prototypes for it too!
//
// 1. takeDamage()
// The code for this is in character.js, just adapt it for the Monster

// 2. die()
// This kills the monster. Make it say something spooky like "MONSTER GO BOOM"

// 3. spawn()
// This spawns a monster.  Make it say something like "ERMAGERD a monster is hear!"
// No other code is really needed for now, we'll fill in this with actual useful code when we have a bit more of the backbone for the game done. But it's good to have the template in, so we'll write it now so we remember we need to fill it out.

// I'm taking a quick break. My code examples are all here, you can see everything I did, so use that as a guide for writing it yourself!
// Find me when you think you are done




// DONE

// Anise, you are going to write this code!
// Here is what I want you to do:
// Write a class, with a constructor for a Monster object
// It will have these attributes:
// Health
// Attack
// level
// name
// ID
//
