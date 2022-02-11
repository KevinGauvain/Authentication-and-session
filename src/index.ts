// la base de express et nunjucks :
import express from "express";
import nunjucks from "nunjucks";

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.set("view engine", "njk");

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.render("home");
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});

// pour form :
const formParser = express.urlencoded({ extended: true });

app.post("/authentification", formParser, (request, response) => {
  const userN = request.body.username;
  const userP = request.body.password;
  console.log(userN, userP);
  if (userN === mydatabase[0].name && userP === mydatabase[0].password) {
    response.render("otherpage");
  } else {
    response.render("home");
  }
});

// pour cookie

// Base de données :
type Mybase = {
  name: string;
  password: string;
};

const mydatabase: Mybase[] = [
  {
    name: "kevin",
    password: "azerty",
  },
];
