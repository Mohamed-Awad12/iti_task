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
