const path = require("path");
const express = require("express");
const app = express();

const port = process.env.PORT || 5000;
const source = path.join(__dirname, "public");
console.log(source);
app.use(express.static(source));
app.set("view-engine", "ejs");

app.get("/", (req, res) => {
  res.render(".ejs");
});
app.listen(port, () => {
  console.log("Server is up on port " + port);
});

// if (process.env.NODE_ENV === 'production') {
// 	app.use(express.static('client/build'));
// }
// app.get('*', (request, response) => {
// 	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });
