
// Task 4

let arr = []
let n = prompt("Enter the Size of the array");

for(let i = 0; i < n; i++){
    arr[i] = prompt("Enter the element")
}

let idx = Number(prompt("Enter the index"))


arr.splice(idx,1)

for(let i = 0; i < n - 1; i++){
   
    document.write(arr[i], " ")
}

