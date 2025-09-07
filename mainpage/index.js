window.onload = function() {
  lscheck(); 
};
async function getinfo(value)
{
  document.getElementById("middlepartparent").style.display = "none";
  const token = localStorage.getItem("token");
  console.log(token);
  let check = true;
  try{
    const resp = await fetch("http://localhost:4000/search", {
      method: "POST",  
      headers: {
        "Content-Type": "application/json",
        "token": token 
      },
      body: JSON.stringify({ "movie" : value }) 
    });
    if(!resp.ok)
    {
      window.location.href = "../errorpage/index.html";
    }
    else
    {
      const response = await resp.json();
      const img = document.getElementById("movieimage");
      img.src = response.result.Poster;
      const date = document.getElementById("month");
      date.innerHTML = response.result.Released;
      const imdb = document.getElementById("imdbscore");
      imdb.innerHTML = response.result.imdbRating;
      document.getElementById("moviesynopsis").innerHTML = response.result.Plot;
      document.getElementById("dinfo").innerHTML = response.result.Director;
      document.getElementById("ginfo").innerHTML = response.result.Genre;
      document.getElementById("dollars").innerHTML = response.result.BoxOffice;
      document.getElementById("awards").innerHTML = response.result.Awards;
      document.getElementById("casts").innerHTML = response.result.Actors;
      document.getElementById("minfo").innerHTML = response.result.Title;
      document.getElementById("movieslogan").innerHTML = response.result.Language;
      document.getElementById("middlepartparent").style.display = "flex";
    }
  }
  catch(e)
  {
    console.log(e);
  }
}
function lscheck() {
  const value = localStorage.getItem("movie");
  console.log(value);
  if(value)
  {
    localStorage.removeItem("movie");
    getinfo(value);
  }
}
function searchit()
{
    const value = document.getElementById("minput").value;
    const result = getinfo(value);
}
function logout()
{
  localStorage.clear();
  window.location.href = "../homepage/index.html";
}