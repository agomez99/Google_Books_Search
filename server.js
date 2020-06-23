const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const axios = require("axios");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");

// middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//API routes
app.get("/api/books",(req,res)=>{
  db.Books.find({})
    .then(dbBooks =>{
      res.json(dbBooks);
    }).catch(err =>{
      res.send(err);
    });
});

app.get("/api/search/:book",(req,res)=>{
  const params = {
    q: req.params.book,
    key: "AIzaSyA0my9YP87S1Sj345dHQEOA4CrNA9THlpc"
  }
  axios.get("https://www.googleapis.com/books/v1/volumes?", {params})
    .then(results =>{
      res.json(results.data);
    }).catch(err=>{
      res.send(err);
    });
});

app.post("/api/books", (req,res)=>{
  db.Books.create({
    title: req.body.title,
    authors: req.body.authors,
    description: req.body.description,
    image: req.body.image,
    link: req.body.link
  }).then(dbBooks =>{
    res.json(dbBooks);
  }).catch(err =>{
    res.send(err);
  });
});

app.delete("/api/books/:id", (req,res)=>{
  db.Books.deleteOne({_id: req.params.id})
    .then(book=>{
      res.json(book);
    }).catch(err=>{
      res.send(err);
    });
});


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/google-books",
{
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}
);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
