// Require dependencies
var express = require("express");
var bodyParser = require("body-parser");
var http = require("http")
var fs = require("fs")
var path = require("path");

var app = express();


// Set our port to 8080
var PORT = 8080

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

app.post("/data/friends", function(req, res) {
  var newFriend = req.body;
  newFriend.routeName = newFriend.name(/\s+/g, "").toLowerCase();

  console.log(newFriend);
  characters.push(newFriend);
  res.json(newFriend);
});
// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================


// When someone visits any path that is not specifically defined, this function is run.
function display404(url, req, res) {
  var myHTML =  "<html>" +
    "<body><h1>404 Not Found </h1>" +
    "<p>The page you were looking for: " + url + " can not be found</p>" +
    "</body></html>"
  res.writeHead(404, { "Content-Type": "text/html" })
  res.end(myHTML)
}
// Starts our server.
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT)
})

