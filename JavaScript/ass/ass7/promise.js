
let partner = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Are you Single?");
    setTimeout(() => {
      console.log("Will you accept my proposal?");
      console.log("You have 5 seconds to think.");
      
      setTimeout(() => {
        let reply = prompt("What is your decision YES/NO: ");
        if (reply.toLowerCase() === "no") {
          reject(new Error('Sorry I am Blind I cannot see anything'));
        } else {
          resolve(reply);
        }
      }, 5000);
    }, 2000); 
  }, 1000);
});

partner.then((result) => {
  console.log("Her answer is: " + result);
}).catch(err => {
  console.log(err.message);
});