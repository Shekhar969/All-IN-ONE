let name = prompt("Enter Your Name: ");
let email = prompt("Enter Your Email: ");
let phoneno = prompt("Enter Your Phone Number: ");

console.log('Your Name is', name);

function verifyEmail(email) {
    const [NamePart, domainPart] = email.split('@');
    
    if (domainPart !== 'gmail.com') {
        throw new Error("Email must end with '@gmail.com'.");
    } else {
        console.log('Your Email is', email);
    }
}

try {
    verifyEmail(email);
} catch (error) {
    console.log(error.message);
}

function verifyPhone(phoneno) {
    if (phoneno.length !== 10 ) {
        throw new Error("Phone number must be exactly 10 digits.");
    } else {
        console.log('Your Phone Number is', phoneno);
    }
}

try {
    verifyPhone(phoneno);
} catch (error) {
    console.log(error.message);
}