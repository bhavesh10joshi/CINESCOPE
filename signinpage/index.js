async function signin()
{
const username = document.getElementById("inputusername").value;
const password = document.getElementById("inputpassword").value;
    try {
    const res = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username : username
                            , password : password })
    });

    const data = await res.json();

    if (res.ok) {
        localStorage.setItem("token", data.token);
        window.location.href = "../signedinhomepage/index.html";
    }
  } catch (err) {
    window.location.href = "../signupandsigninerrorpage/index.html";
  }
}