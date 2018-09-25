// console.log("js test");
// $('body').append("jQuery test");

// REQUIREMENTS
    // Create a repo for your tomagotchi pet
    // make a commit after you finish each one of the following
    // Create a Class (JS Class, look at your notes if your forget) for your tomagotchi
    // Instantiate your Tomagotchi
    // Display a character of your choice on the screen to represent your pet
    // Display the following metrics for your pet:
    // Hunger (1-10 scale)
    // Sleepiness (1-10 scale)
    // Boredom (1-10 scale)
    // Age
    // Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
    // Add the ability to name your pet.
    // Style the page.
    // Increase your pet's age every x minutes
    // Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
    // You pet should die if Hunger, Boredom, or Sleepiness hits 10.
    // Morph your pet at certain ages.
    // Animate your pet across the screen while it's alive.

// CREATE A TOMAGOTCHI CLASS

class Tomagotchi {
    constructor(name, age, hunger, sleepiness, boredom) {
        this.name = name;
        this.age = 0;
        this.hunger = 1;
        this.sleepiness = 1;
        this.boredom = 1;
    }    
};

// INSTANTIATE THE TOMAGOTCHI CLASS

const newTomagotchi = new Tomagotchi;
console.log(newTomagotchi);

$('#age').append(`${newTomagotchi.age}  `);

// CREATE BUTTONS TO INTERACT WITH TOMAGOTCHI

$('#feed').on('click', () => {
    $('#hunger').text(`Hunger: ${newTomagotchi.hunger}  `);
    newTomagotchi.hunger++;
    //console.log('Lets eat!');
});

$('#lights').on('click', () => {
    $('#sleepiness').text(`Sleepiness: ${newTomagotchi.sleepiness}  `);
    newTomagotchi.sleepiness++;
    //console.log('Im tired!');
});

$('#play').on('click', () => {
    $('#boredom').text(`Boredom: ${newTomagotchi.boredom}  `);
    newTomagotchi.boredom++;
    //console.log('Lets play!');
});

// class Person {
//     constructor(name, eyeColor){
//         this.legs = 2;
//         this.arms = 2;
//         this.eyes = eyeColor;
//         this.name = name;
//     }
//     greet(otherPerson){
//         console.log(`Hi ${otherPerson}!`);
//     }
//     jump(){
//         console.log("weeee")
//     }
// }

// // instatiating a class
// // Creating an object from our blueprint

// const bob = new Person("bob", "blue");
// const joan = new Person("joan", "green");

// console.log(bob);

// // edit the properties of our instance on the fly
// // the instance is just and object

// bob.eyes = "orange";
// bob["eyes"] = "red";