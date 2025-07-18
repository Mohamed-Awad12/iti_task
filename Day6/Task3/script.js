
// Task 3


let arr = []
let n = prompt("Enter the Size of the array");
let x = prompt("Enter the target")
let idx = -1
for(let i = 0; i < n; i++){
    arr[i] = prompt("Enter the element")
    if(arr[i] == x) idx = i
}

window.alert(idx)
