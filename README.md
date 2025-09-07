# CINESCOPE
CINESCOPE is a movie info web app with secure signup/login using JWT, bcrypt &amp; MongoDB. Search movies to get posters, release date, IMDB rating, synopsis, directors, language, box office, awards &amp; genres. Built with HTML, CSS, JS frontend &amp; Express backend using RapidAPI for data.


🎬 CINESCOPE

CINESCOPE is a movie information web application that allows users to explore detailed insights about their favorite films. From posters and release dates to IMDB ratings, box office collections, and awards — CINESCOPE brings it all together in one place.

✨ Features

🔑 Authentication System

Secure Sign Up & Sign In using JWT, bcrypt, and token-based authentication.

Only registered members can access the movie search service.

🎥 Movie Search

Search movies with precise keywords.

Fetches data such as:

Poster & Title

Release Date

IMDB Rating

Synopsis / Overview

Director(s)

Language of Origin

Worldwide Box Office Collection (in $)

Awards (International & Local)

Genre(s)

⚡ Frontend

Built with HTML, CSS, and Vanilla JS.

Dynamic DOM manipulation with fetch().

LocalStorage used for session persistence (storing tokens).

🛠️ Backend

Powered by Express.js.

Endpoints:

/signup → register a new user.

/login → authenticate existing users.

/search → fetch detailed movie data using third-party APIs.

MongoDB + Mongoose for database operations (storing user info).

Zod for input validation.

JWT for secure token authentication.

🌍 API Integration

Uses RapidAPI services to fetch IMDB IDs and full movie details.

All results parsed and displayed dynamically on the frontend.

🛠️ Tech Stack

Frontend: HTML, CSS, JavaScript (Vanilla)

Backend: Node.js, Express.js

Database: MongoDB with Mongoose

Authentication: JWT, bcrypt

Validation: Zod

APIs: RapidAPI (IMDB + Movie Data APIs)

🚀 How It Works

Sign Up / Log In → Create an account or log in with existing credentials.

Search a Movie → Enter a movie title (clear keywords required).

View Details → CINESCOPE displays all information fetched via APIs.

📦 Future Enhancements

Add personalized user dashboards.

Implement favorites / watchlist feature.

Add trending movies & recommendations.

Deploy online (e.g., Vercel + MongoDB Atlas).

📸 Screenshots

<img width="1896" height="928" alt="image" src="https://github.com/user-attachments/assets/eac2ac6a-ac02-494a-aa93-30de12a565e1" />
