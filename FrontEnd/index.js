const express = require("express");
const app = express();
const port = 3000
const multer = require("multer");
const firebase = require("firebase/app");
const { getStorage, ref, uploadBytes, getDownloadURL } = require("firebase/storage");

const firebaseConfig = {
  apiKey: process.env.API_KEY,
    authDomain: 'capstone2-e7f77.firebaseapp.com',
    projectId: 'capstone2-e7f77',
    storageBucket: 'capstone2-e7f77.appspot.com',
    messagingSenderId: '1040797896688',
    appId: '1:1040797896688:web:38c020f955b4a8d7491735',
    measurementId: 'G-JM1DSBH536'
};

firebase.initializeApp(firebaseConfig);

const storage = getStorage();
const upload = multer({ storage: multer.memoryStorage() });


app.get("/firebase/:fileName", (req, res) => {
  let folder = req.query.folder || '';
  getDownloadURL(ref(storage, `${folder}/${req.params.fileName}`))
  .then ( (url) => {
    res.json(url);
  }).catch ( (err) => {
    res.json('File not found!')
  });
}); 

app.post("/firebase/:folder", upload.single("filename"), (req, res) => {
  const storageRef = ref(storage, `${req.params.folder}/${req.file.originalname}`);

  uploadBytes(storageRef, req.file.buffer)
    .then((snapshot) => {
      res.json("File uploaded successfully");
    })
    .catch((error) => {
      res.json("File upload failed");
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})