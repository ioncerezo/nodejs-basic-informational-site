const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
const userRouter = require('./routes/users')

app.set('view engine', 'ejs')
app.use(express.static("public"));
app.use('/users', userRouter)

app.get("/", (req, res) => res.render('index'));
app.get("/about", (req, res) => res.render('about'));
app.get("/contact-me", (req, res) => res.render('contact-me'))

app.get("/*", (req, res) => res.render('404'))

app.listen(port)
