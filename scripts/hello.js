let x = 10;
let y = 5;

let val = x + y;
//console.log({val});

val = x - y;
//console.log({val});

val = x * y;
//console.log({val});

val = x / y;
//console.log({val});
y = 3;
val = x % y;
//console.log({val});

function sayHi() {
    let name = document.getElementById('name').value;
    let aNumber = document.getElementById('aNumber').value;
    let bNumber = document.getElementById('bNumber').value;

    alert('Hello, ' + name);
    console.log("Hello, world!", name);
    console.log(aNumber + bNumber)

}