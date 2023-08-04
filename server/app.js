const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

// Your database seed function
const { seed } = require("../seed"); // Replace this with the actual path to your seed function

// static middleware
app.use(express.static(path.join(__dirname, "..", "public")));

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./api"));

app.use(cors());
app.use(morgan("dev"));

// Add a new route to trigger the seed function
app.post("/api/seed", async (req, res) => {
  try {
    // Call the seed function here
    await seed();
    res.status(200).send("Data reseeded successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error reseeding data.");
  }
});

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

module.exports = app;
