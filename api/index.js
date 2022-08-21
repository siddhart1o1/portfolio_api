const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

var admin = require("firebase-admin");
var serviceAccount = require("./portfolio-8251f-firebase-adminsdk-cuhmz-3d0222cc3b.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://portfolio-8251f-default-rtdb.asia-southeast1.firebasedatabase.app",
});
const db = admin.firestore();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const snapshot = await db.collection("projects").get();
    const projects = snapshot.docs.map((doc) => doc.data());
    for (let i = 0; i < projects.length; i++) {
      projects[i].id = snapshot.docs[i].id;
    }
    console.log(projects);

  res.json(projects);
});


app.get("/experience", async (req, res) => {
  const snapshot = await db.collection("experience").get();
  const projects = snapshot.docs.map((doc) => doc.data());
  for (let i = 0; i < projects.length; i++) {
    projects[i].id = snapshot.docs[i].id;
  }
  console.log(projects);
  res.json(projects);
});

app.get("/about", async (req, res) => {
  const snapshot = await db.collection("experience").get();
  const projects = snapshot.docs.map((doc) => doc.data());
  for (let i = 0; i < projects.length; i++) {
    projects[i].id = snapshot.docs[i].id;
  }
  console.log(projects);
  res.json(projects);
});




app.listen(5000);
module.exports = app;