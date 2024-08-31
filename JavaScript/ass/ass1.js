//console name
let name="shekhar";
console.log(name);

//area of rec
let area,length,breadth=null;
length=prompt("Enter the length of rectangle: ")
breadth=prompt("Enter the breadth of rectangle: ")

area= length*breadth;
console.log("The area of rectangle is ", area);

//concatenation of Text
let Firstname=prompt("Enter the first Name");
let Secondname=prompt("Enter the Second Name");

console.log([Firstname]+[Secondname]);

//If Else statement
let age=prompt("Enter your age");
age=Number(age);
if(age>=18)
{
    console.log("You are elliable for the vote");
}
else
{
    console.log("You arenot elligable for the voting");
}

//compresion of numbers
let A,B;
A=prompt("Enter the first num:");
B=prompt("Enter the Second Num:");

if(A==B)
{
    console.log("Both Numbers are equal")
}
else if(A>B)
{
    console.log("A is greater then B");
}
else
{
    console.log("B is greater then A");
}