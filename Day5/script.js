// let firstName = prompt("Enter your first name: ")
// let secondName = prompt("Enter your second name: ")
// let address = prompt("Enter your address: ")
// window.alert("Hello, "+ firstName + " " + secondName + " from " + address)



// let mx = -1e9;
// for(let i = 0; i < 3; i++){
//     let num = prompt("Enter a number" )
//     if(num > mx) mx = num;
// }

// window.alert("the max number is: " + mx)


// let text = prompt("Enter a text: ");

// for (let i = 1; i <= 6; i++) {
//     document.write(`<h${i}>${text}</h${i}>`);
// }

let tries = 3;
let name;

while (tries--) {
    name = prompt("Enter your name");
    
    if (name && typeof name === "string") {
        break;
    } else {
        if (tries > 0) {
            window.alert("Invalid input. Try again.");
        } else {
            window.alert("Not authorized.");
            return
        }
    }
}

tries = 3;
let birthYear;

while (tries--) {
    birthYear = prompt("Enter your birth year");

    birthYear = Number(birthYear);

    if (isNaN(birthYear)) {
        window.alert("Not a number");
    } else if (birthYear > 2010) {
        window.alert("Not available");
    } else {
        break;
    }

    if (tries === 0) {
        window.alert("Not authorized.");
    }
}

let age = 2025 - birthYear;

document.write(`Name: ${name} <br> Birth Year: ${birthYear} <br> Age: ${age}`);
