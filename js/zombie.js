//create the four groups of zombies
var zombies = ["west", "south", "north", "east"];
    zombies = $.shuffle(zombies);

//initialize the initial threat
var available_threat = 100;

//loop through four groups and assign threat level
for(var i=0; i < zombies.length; i++){
    //get random number from what is available
    var threat = Math.ceil(Math.random() * available_threat);
        
    //set that hoardes threat level
    zombies[i][threat];
    
    //update the available threat (it all adds up to 100)
    available_threat = available_threat - threat;
}

//get random number between 0 and 3
var exit = Math.ceil(Math.random() * 3); console.log(exit);

//get the keys of the house object (the names of the rooms)
var keys = Object.keys(house);

//get the name of the room the exit is going to be
var exit = keys[exit]; console.log(exit);

//set the exit 
house[exit].exit = 1;

//will contain ALL of the attack logic
function attack(){
    alert("ZOMBIES ATTACKED AND YOURE DEAD");
}


