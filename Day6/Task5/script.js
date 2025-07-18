
// Task 5

let target = Math.round(Math.random() * 10);

let flg = true;
let tries = 10;
let guess;

while (tries--) {
    guess = prompt("Enter your guess");
    if (guess == target) {
        window.alert("Great Work");
        flg = false;
        break;
    } else {
        window.alert("Try again");
    }
}

if (flg)
    window.alert("Game over");
