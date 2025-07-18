
// Task 2

function isPalindrome(text) {
    let tmp = text.split('').reverse().join('');
    return tmp == text;
}

let text = prompt("Enter text:");

if (isPalindrome(text)) {
    window.alert("palindrome");
} 
else {
    window.alert("not palindrome");
}
