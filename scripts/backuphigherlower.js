const regex = new RegExp('[0-9]+.?[0-9]*');
let max = 0;
let nMax=0;
let round = 0
/* ed
let guessGame= {
    max: 0,
    currentGuess: 0,
    guesses: []
  };
  */
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
//isNaN()
function higherLower(){
    round +=1
    console.log(1, max, result);

    var x = Number(document.getElementById("guess").value);
    if ((x%1) != 0) 
    {
        alert("That is not a number!");
        return false;
    }
    else if ( Number(x) < 1 || Number(x)> Number(max) ){
        console.log(1, x ,Number(max));
        alert("That number is not in range, try again.");
        return false;
    }

    let guess = Number(document.getElementById("guess").value);

    let message = document.getElementById("message");
    tableHeaderData = `<tr> 
        <th scope="col">Round</th>
        <th scope="col">Number</th>
        </tr> 
    `

    
    const tableHead = document.querySelector("#tableHead");
        tableHead.innerHTML = tableHeaderData;
    //Repeated Numbers Logic
    console.log(data)
    console.log(data.length);
    if(data.find(x => x.Numbers === guess)){
        console.log("yes");
        alert("This number is repeated!");
    }
    else{ //Everything seems fine at this point.
        console.log("Noo");
        if(guess===result){
            message.innerHTML = "You got it!! <br>it took you "+ round+ " rounds to guess the number "+ result+".";
            data.push({'Round':round, 'Numbers':guess});
            const tableData = data.map(function(value){
                return (
                    `<tr>
                        <td>${value.Round}</td>
                        <td>${value.Numbers}</td>
                    </tr>`
                );
            }).join('');
        const tableBody = document.querySelector("#tableBody");
            tableBody.innerHTML = tableData;
            //deactivate the guess button
        }
        else{
        if (guess> result){
                message.innerHTML = "No. Try a lower number."
            }
        else if(guess < result ){
            message.innerHTML = "No. Try a higher number."
            }
            data.push({'Round':round, 'Numbers':guess});
            const tableData = data.map(function(value){
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

while(isNumber(max)){
    
    max = prompt("what the maximum number should be?");
    //test 3
    //regex way

    //if(regex.test(max)){
    if(isNumber(max)){
        //console.log(regex.test(max))
        if( max<1){
            alert("It has to be greater than 1.")
        }
        else{
            const data = []; // any json data or array of objects
            max = Math.round(max);
            //console.log(max)
            guessFrom1ToX.innerHTML = "Guess a Number from 1 to " + max;
            let result = Math.floor(Math.random() * Number(max)) + 1;

            console.log('the random number is,', result);

            

            break;
        }
    }
    else{
        alert("That is not a number!")

    }
}



