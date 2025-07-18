log =  document.getElementById("login");
reg = document.getElementById("register");
hom = document.getElementById("home");
wrReg = document.getElementById("wrongReg");
wrLog = document.getElementById("wrongLog")

function showRegister() {
  reg.style.display = "block";
  log.style.display = "none";
  hom.style.display = "none";
    wrLog.innerText = ` `
  wrReg.innerText = ` `
}

function showLogin() {
  reg.style.display = "none";
  log.style.display = "block";
  hom.style.display = "none";
    wrLog.innerText = ` `
  wrReg.innerText = ` `
}

function showHome(username) {
  reg.style.display = "none";
  log.style.display = "none";
  hom.style.display = "block";
  document.getElementById("userDisplay").innerText = username;
    wrLog.innerText = ` `
  wrReg.innerText = ` `
}

function register() {
  let username = document.getElementById("regUsername").value;
  let password = document.getElementById("regPassword").value;
  let email = document.getElementById("regEmail").value;

  if (!username || !password || !email) {
    wrReg.innerText = `Please fill all required data`
    wrReg.style = "color : red"
    return;
  }

  if (localStorage.getItem(username) || localStorage.getItem(email)) {
    wrReg.innerText = `data is already exist`
    wrReg.style = "color : red"
    return;
  }

  localStorage.setItem(username, JSON.stringify({ password }));
  
  showLogin();
  
}

function login() {
  let username = document.getElementById("loginUsername").value;
  let password = document.getElementById("loginPassword").value;

  let stored = localStorage.getItem(username);
  
  if (!stored) {
    wrLog.innerText = `User not found.`
    wrLog.style = "color : red"
    return;
  }

  let userData = JSON.parse(stored);
  if (userData.password !== password) {
    wrLog.innerText = `Wrong password`
    wrLog.style = "color : red"
    return;
  }

 
  showHome(username);

}

function logout() {
  showLogin();
 
}
