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
