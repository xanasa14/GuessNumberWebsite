function flip(guess){
    

    //random number
    let result = Math.floor(Math.random() *2) + 1;
    //get message paragraph
    let message = document.getElementById("message");
    //check result of the random versus the guess
    if(result === 1 ){//result of random number is 1; it means heads
        
        console.log(result);
        if(guess==="heads"){
            message.innerHTML = "1)You guessed heads.<br>The coin flips and comes up heads! Good guess!";
        }
        else{
            message.innerHTML  = "2) You guessed tails.<br>The coin flips and comes heads! Try again!";
        }
    }
    else if(result === 2) {// result of random number is 2; it means tails
        console.log(result);
        if(guess==="tails"){
            message.innerHTML="3)You guessed tails.<br>The coin flips and comes up tails! Good guess! "
        }
        else{
            message.innerHTML="4)You guessed heads.<br>The coin flips and comes tails. Try again."
        }

    }
    return 0;
}