const express = require("express");
const app = express();
const multer = require("multer");
const firebaseController = require("./app/controller/FirebaseController");

const upload = multer({ storage: multer.memoryStorage() });
const port = 3000

app.get("/firebase/:fileName", firebaseController.getLink); 

app.post("/firebase/:folder", upload.single("filename"), firebaseController.upload);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});