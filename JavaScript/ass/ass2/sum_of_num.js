let number,sum=null;

while(true)
{
    let input=prompt("Enter the Number or Type stop to termenate the program: ");

    if(input == 'stop')
    {
        break;
    }

    else{
        let number=Number(input);
        sum +=number;
    }
}

console.log("The sum of the given numers are:" + sum);