

const loginBtn = document.querySelector(".loginBtn") ; 
const userInfo = localStorage.getItem("userInfo");  

if(userInfo) { 
  const userInfoJson = JSON.parse(userInfo) ; 
  const userName = userInfoJson.data?.Name ; 
  loginBtn.innerHTML= `<div><div>${userName}</div><button onclick="handleLogout(this)">Logout</button></div>` ;
  console.log("Location name" , window.location.pathname)
  if(window.location.pathname =="/login.html") window.location.replace("/");
}
function handleLogout() {
   localStorage.clear();
    window.location.reload()
}