document.getElementById("loginForm").addEventListener("submit",function(e){

e.preventDefault();

let username=document.getElementById("username").value;

let password=document.getElementById("password").value;

if(username==="admin" && password==="admin123"){

alert("Login Successful");

window.location.href="../dashboard.html";

}
else{

document.getElementById("error").innerHTML="Invalid Username or Password";

}

});
