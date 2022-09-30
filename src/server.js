//Load HTTP module
const http = require("http");
const multer = require("multer");
const express = require("express");
const { upload } = require("../config/multerConfig");

const hostname = "127.0.0.1";
const port = 3000;

const app = express();
// Definimos donde se subirán los archivos

app.use(express.json());

app.use(express.static("public"));

app.get("/api", () => {
  console.log("BOOM");
});

app.post("/upload_files", upload.array("files"), (req, res) => {
  try {
    console.log(req.body);
    console.log(req.files);
    res.json({ message: "Successfully uploaded files" });
  } catch (err) {
    console.error(err);
  }
});

//listen for request on port 3000, and as a callback function have the port listened on logged
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
