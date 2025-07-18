

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
