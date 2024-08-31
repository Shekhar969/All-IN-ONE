let input=prompt("Enter the Text ")

let splitinput = input.split(''); 
let reversed = splitinput.reverse(); 
let reversedInput = reversed.join('');

if (input === reversedInput) 
    {
    console.log("The string is a palindrome.");
} 
    else
        {
            console.log("The string is not a palindrome.");
        }
