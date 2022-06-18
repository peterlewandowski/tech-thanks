require('dotenv').config();
const http = require("http"); // standard http server
const express = require("express"); // express library
const cors = require('cors'); // cors middleware to have a great API experience
const path = require("path"); // express has a method for using local path. but now.sh doesn't like it.
const low = require('lowdb'); // lowdb for now
const FileSync = require('lowdb/adapters/FileSync');
const db = low(new FileSync("../db.json"));
const app = express(); // Express server (we seperate to introduce middleware) you could also do: app = require("express")()
const port = process.env.PORT || 8080; // use any port you want or use a enviromental PORT variable
app.use(express.json()); // Now express no longer needs the body-parser middleware and has it's own.
app.use(cors()); // For APIS this allows CORS access
app.use(express.static(path.join(__dirname, "../client/build"))); // This is for static files. like CSS or Images etc.
let server = http.createServer(app);

// For debugging;
app.use(morgan('tiny'));

app.get("/",(req,res) => {
    res.send("Well..hello there")
})

app.get("/leaderboard", (req,res) => {
   const leaders =  db.get('leaders').read();
  res.json(leaders);
})


// start the web server.
server.listen(8080, () => {
    console.log('gifchat listening on *:8080');
  });
