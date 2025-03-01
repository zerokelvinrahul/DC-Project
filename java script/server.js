const express = require("express");
const app = express();
const path = require("path");

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname,))); 

// Route to serve home.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"home.html")); 
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
