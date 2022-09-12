const regex = new RegExp('[0-9]+.?[0-9]*'); 
let guessGame= {
   max: 0,
   userGuess: 0,
   randomNumber: 0,
   data: [],
   round: 0,
   flag: true, 
   attempts: ''
 };
 
function tryAgain(){
    return window.location.reload();
}
function isNumber(n) {
   return !isNaN(parseFloat(n)) && isFinite(n);
 }
function higherLower(){
    console.log('is this running');
   console.log(1, guessGame.max, guessGame.randomNumber);
 
guessGame.userGuess = Number(document.getElementById("guess").value);
   if ((guessGame.userGuess%1) != 0)
   {
       alert("That is not a number!");
       return false;
   }
   else if ( Number(guessGame.userGuess) < 1 || Number(guessGame.userGuess)> Number(guessGame.max) ){
       console.log(1, Number(guessGame.max),guessGame.userGuess );
       alert("That number is not in range, try again.");
       return false;
   }
 
   let message = document.getElementById("message");
   tableHeaderData = `<tr>
       <th scope="col">Round</th>
       <th scope="col">Number</th>
       </tr>
   `
   const tableHead = document.querySelector("#tableHead");
    tableHead.innerHTML = tableHeaderData;
   //Repeated Numbers Logic
   console.log(guessGame.data)
   console.log(guessGame.data.length);
   if(guessGame.data.find(dataElement => dataElement.Numbers === guessGame.userGuess)){
       console.log("yes");
       alert("This number is repeated!");
       return false;
   }
   else{ //Everything seems fine at this point.
       console.log("Noo");
       guessGame.round +=1

       if(guessGame.userGuess===guessGame.randomNumber){
        guessGame.attempts += "and "+ guessGame.userGuess+'.';
        document.getElementById("guessButton").disabled = true;
        if(guessGame.data.length >= 1){
        message.innerHTML = "You got it!! <br>It took you "+ guessGame.round+ " rounds to guess the number "+ guessGame.randomNumber+". " + "Your guesses were "+ guessGame.attempts;
        }
        else if (guessGame.data.length === 0){
            message.innerHTML = "You got it!! <br>It took you "+ guessGame.round+ " round to guess the number "+ guessGame.randomNumber+".";
        }
        guessGame.data.push({'Round':guessGame.round, 'Numbers':guessGame.userGuess});
        const tableData = guessGame.data.map(function(value){
            return (
                `<tr>
                    <td>${value.Round}</td>
                    <td>${value.Numbers}</td>
                </tr>`
            );
        }).join('');
       const tableBody = document.querySelector("#tableBody");
           tableBody.innerHTML = tableData;
       }
       else{
        if (guessGame.userGuess> guessGame.randomNumber){
                message.innerHTML = "No. Try a lower number."
                guessGame.attempts += guessGame.userGuess+', ';

            }
        else if(guessGame.userGuess < guessGame.randomNumber ){
            message.innerHTML = "No. Try a higher number."
            guessGame.attempts += guessGame.userGuess+', ';

            }

            guessGame.data.push({'Round':guessGame.round, 'Numbers':guessGame.userGuess});
            const tableData = guessGame.data.map(function(value){
                return (
                    `<tr>
                        <td>${value.Round}</td>
                        <td>${value.Numbers}</td>
                    </tr>`
                );
            }).join('');
        const tableBody = document.querySelector("#tableBody");
        tableBody.innerHTML = tableData;
        }
 
   }
     
}
 
while(guessGame.flag){
 
  guessGame.max = prompt("What the maximum number should be?");
  console.log(guessGame.max)
  console.log("*****")
   //test 3
   //regex way
 
   //if(regex.test(max)){
    console.log(isNumber(guessGame.max)), "=======";

   if(isNumber(guessGame.max)){
    console.log(isNumber(guessGame.max)), "=======";
       //console.log(regex.test(max))
       if( guessGame.max<1){
           alert("It has to be greater than 1.")
       }
       else{
           guessGame.max = Math.round(guessGame.max);
           guessFrom1ToX.innerHTML = "Guess a Number from 1 to " + guessGame.max;
           guessGame.randomNumber = Math.floor(Math.random() * Number(guessGame.max)) + 1;
 
           console.log('the random number is,', guessGame.randomNumber);
           guessGame.flag = false; 
           document.getElementsByTagName("Body")[0].style.display = "block";


           break;
       }
   }
 
   else {
    console.log(guessGame.max)
    console.log('----')
 
    alert("That is not a number!");

   }
   console.log(guessGame.max);

}
 

document.getElementById("guessButton").onclick = function(e)  {
  higherLower(); 
}
 
document.getElementById("tryAgainButton").onclick = function(e)  {
    tryAgain(); 
  }

 let input = document.getElementById("guess");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("guessButton").click();
  }
});
 
 
 

