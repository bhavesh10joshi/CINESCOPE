function logout()
{
    localStorage.clear();
    window.location.href = "../homepage/index.html";
}
function searchit()
{
    const value = document.getElementById("searchbox").value;
    localStorage.setItem("movie" , value);
    window.location.href = "../mainpage/index.html";   
}