// config.js
const apiUrl =
  process.env.NODE_ENV === "production"
    ? "https://hogwartsschool-156e68ebb527.herokuapp.com/"
    : "http://localhost:3000"; // Replace this with your local backend server URL

export default apiUrl;
