const app = require("express")();
const fileUpload = require("express-fileupload");
const server = require("http").Server(app);

const template = require("./routes/template");
const upload = require("./routes/upload");
const mongoose = require("mongoose");

mongoose.set("useCreateIndex", true);
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);

app.use(fileUpload());

server.listen(8080);
mongoose.connect("mongodb://localhost:27017/csv-spike");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/template", template.get);

app.post("/", upload.post);
