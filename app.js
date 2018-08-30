const express = require("express");
const app = express();

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

let reviews = [
	{title: "Inception"},
	{title: "Interstellar"}
];

app.get("/", (req, res) => {
	res.render("reviews-index", {reviews: reviews});
});

app.listen(3000, () => {
	console.log("App listening on port 3000");
});


