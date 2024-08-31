function first(){
    console.log(`I Am First`)
}
function second(){
    console.log(`I Am Second`)
}
function third(){
    console.log(`I Am Third`)
}

first();
second();
third();


function first(){
    console.log(`I Am First`)
}
function second(){
    setTimeout(()=>{
        console.log(`I Am Second`)
    },0)
}
function third(){
    console.log(`I Am Third`)
}

first();
second();
third();

//function call
function hello(callback){
    let name=prompt("Enter Your Name");
    
    callback(name);
}

function greet(name){
    console.log("Hello"+ name);
}

hello(greet);


function first(callback){
    console.log(`I Am First`)

  let second;
second=console.log(`I Am Second`)

callback(second)
}



function second(){
    setTimeout(second,3)
}
function third(){
    console.log(`I Am Third`)
}

first();
second();
third();

// sync=one by one
// async= run independently

console.log("1");

setTimeout(() => {
    console.log("2");
}, 2000);

console.log("3");





function getname(){
    console.log("shekhar")
}
function getdetails(name){
    console.log(your detail)

    name();
}

getdetails(getname);