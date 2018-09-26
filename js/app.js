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

// CREATE BUTTONS TO INTERACT WITH TOMAGOTCHI

$('#feed').on('click', () => {
    $('#hunger').text(`Hunger: ${newTomagotchi.hunger}  `);
    newTomagotchi.hunger--;
    //console.log('Lets eat!');
});

$('#lights').on('click', () => {
    $('#sleepiness').text(`Sleepiness: ${newTomagotchi.sleepiness}  `);
    newTomagotchi.sleepiness--;
    //console.log('Im tired!');
});

$('#play').on('click', () => {
    $('#boredom').text(`Boredom: ${newTomagotchi.boredom}  `);
    newTomagotchi.boredom--;
    //console.log('Lets play!');
});

// NAME THE TOMAGOTCHI

$('#enterName').on('click', () => {
    const $tomagotchiName = $('input').val();
    $('#name').text(`Name: ${$tomagotchiName}  `);
    $('.nameTomagotchi').remove();
    timePasses();

});

// IMPLEMENT A TIMER
let time = 0;

const timePasses = () => {
    const interval = setInterval(() => {
        time++;
        $('#time').text(`Timer: ${time}s`);

        if(time % 60 === 0){
            newTomagotchi.age++;
            $('#age').text(`Age: ${newTomagotchi.age}  `);
        }

        if(time % 10 === 0){
            newTomagotchi.hunger++;
            $('#hunger').text(`Hunger: ${newTomagotchi.hunger}  `);
        }

        if(time % 20 === 0){
            newTomagotchi.sleepiness++;
            $('#sleepiness').text(`Sleepiness: ${newTomagotchi.sleepiness}  `);
        }

        if(time % 5 === 0){
            newTomagotchi.boredom++;
            $('#boredom').text(`Boredom: ${newTomagotchi.boredom}  `);
        }

        if(newTomagotchi.hunger === 10){
            gameOver();
        }

        if(newTomagotchi.sleepiness === 10){
            gameOver();
        }

        if(newTomagotchi.boredom === 10){
            gameOver();
        }

        if(newTomagotchi.age >= 1){
            $('#myTomagotchiPic').attr('src', 'https://www.mcpheebros.com/mcp/wp-content/uploads/2016/11/goat-5-700x450.jpg')
        }

        if(newTomagotchi.age >= 2){
            $('#myTomagotchiPic').attr('src', 'https://res.cloudinary.com/teepublic/image/private/s--vfs-_Xf_--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1509079271/production/designs/2003658_1.jpg')
        }

        console.log('timer is working');
        moveGoat();
      }, 1000);

};




// BUILD A GAME OVER FUNCTION

const gameOver = () => {
    window.location.reload(true);
    alert('GAME OVER: Your Goat has died. Press OK to play again.')
};


// ANIMATION FUNCTION

const moveGoat = () => {
    // console.log('Please move goat!');
    $("#myTomagotchiPic").velocity({"translateX": "1000px"}, 1500, () => { 
        $("#myTomagotchiPic").velocity({"translateX": "100px"}, 1500) 
     })
};
