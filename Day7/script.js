// =================== Task 1 ===================
let clockStarted = false;

function startClock() {
  if (clockStarted) return; 
  clockStarted = true;

  alert("Clock Started");

 let id =  setInterval(() => {
    let now = new Date();
    let localTime = now.toLocaleTimeString();
    document.getElementById("clock").textContent = localTime;
  }, 1000);
}

function stopClock(){
    if(!clockStarted) return;
    alert("sure?");
    clockStarted = false
    clearInterval(id)
}

// =================== Task 2 ===================

   function openLinkedIn() {
      open("https://www.linkedin.com","LinkedInWindow",
        "width=800,height=600,top=100,left=100");
    }

// =================== Task 3 ===================

let adWindow, paragraph;

function openAdWindow() {
 
  adWindow = window.open("", "AdWindow", "width=600,height=400");


  
  id = setTimeout(() => {
    if (adWindow) {
          adWindow.document.write(`
        <html>
          <head><title>Advertisement</title></head>
          <body>
            <p class"para">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Is
    te est iusto inventore hic expedita dolores, asperiores r
    epellendus! Neque ducimus nam amet repellat sint natus ve
    ritatis, atque, sapiente temporibus fugit itaque.
            </p>
          </body>
        </html>
      `);

      adWindow.document.close(); 
    }
  }, 3000);


}

function closeCurrentPage() {
  adWindow.close();
}

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

    if(students[i].degree >= 90){
        document.write(`${students[i].name} : ${students[i].degree} <br>`)
    }
}



