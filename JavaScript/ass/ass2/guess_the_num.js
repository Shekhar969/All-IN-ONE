
let randomnum= Math.round(Math.random()*100);

let inputnum=prompt("Guess a number ");
inputnum=Number(inputnum);

if (inputnum == randomnum)
    {
        console.log(inputnum+"Is the correct guess");
    }
    else
    {
        console.log("Try again");
    }
console.log("The correct Number is "+randomnum)