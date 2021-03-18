// rolling dice logic
function rollDice() {
     return Math.floor(Math.random()*6) + 1
     //return Math.ceil(Math.random()*6) <--- this allows for the removal of one, but Math.floor is preferred
   }
   
// calling it with a for loop -- 10 rolls 
   for(let i = 0; i < 10; i++) 
    console.log(rollDice())