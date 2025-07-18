
// =================== Task 4 ===================

let students = [
    
    {
        name : "Mohamed",
        degree : 90
    },
    {
        name : "omar",
        degree : 100
    },
     {
        name : "ali",
        degree : 100
    },
     {
        name : "salah",
        degree : 67
    },
     {
        name : "abaas",
        degree : 33
    },
]


for (let i = 0; i < students.length; i++){
    let deg = students[i].degree;
    if(deg >= 90 && deg < 100){
        document.write(`${students[i].name} : ${students[i].degree} <br>`)
    }
}



