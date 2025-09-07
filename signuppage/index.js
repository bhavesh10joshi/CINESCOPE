
async function signup()
{
const username = document.getElementById("inputusername").value;
const email = document.getElementById("inputemail").value;
const password = document.getElementById("inputpassword").value;
    try {
    const res = await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username : username
                            , email : email
                            , password : password })
    });

    const data = await res.json();

    if (res.ok) {
      window.location.href = "../alertsignupsuccess/index.html";
    }
  } catch (err) {
    window.location.href = require("../signupandsigninerrorpage/index.html");
  }
}