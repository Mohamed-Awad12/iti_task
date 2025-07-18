// Task 1

let n = prompt("Enter the size of the array: ")
let arr = []
 document.write("You have entered the values: ")
for(let i = 0; i < n; i++){
    arr[i] = prompt("Enter a number")

    document.write(arr[i], " ")
}

document.write("<br>");

arr.sort()
 document.write("values after sorting ")
for(let i = 0; i < n; i++){
   
    document.write(arr[i], " ")
}

document.write("<br>");

arr.sort((a,b)=>(b - a))
 document.write("values after sorting reversed ")
for(let i = 0; i < n; i++){
   
    document.write(arr[i], " ")
}

// Task 2

// function isPalindrome(text) {
//     let tmp = text.split('').reverse().join('');
//     return tmp == text;
// }

// let text = prompt("Enter text:");

// if (isPalindrome(text)) {
//     window.alert("palindrome");
// } 
// else {
//     window.alert("not palindrome");
// }


// Task 3


// let arr = []
// let n = prompt("Enter the Size of the array");
// let x = prompt("Enter the target")
// let idx = -1
// for(let i = 0; i < n; i++){
//     arr[i] = prompt("Enter the element")
//     if(arr[i] == x) idx = i
// }

// window.alert(idx)


// Task 4

// let arr = []
// let n = prompt("Enter the Size of the array");

// for(let i = 0; i < n; i++){
//     arr[i] = prompt("Enter the element")
// }

// let idx = Number(prompt("Enter the index"))


// arr.splice(idx,1)

// for(let i = 0; i < n - 1; i++){
   
//     document.write(arr[i], " ")
// }


// Task 5

// let target = Math.round(Math.random() * 10);

// let flg = true;
// let tries = 10;
// let guess;

// while (tries--) {
//     guess = prompt("Enter your guess");
//     if (guess == target) {
//         window.alert("Great Work");
//         flg = false;
//         break;
//     } else {
//         window.alert("Try again");
//     }
// }

// if (flg)
//     window.alert("Game over");
