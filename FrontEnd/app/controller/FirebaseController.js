require('dotenv').config();

const firebase = require("firebase/app");
const { getStorage, ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
const storage = getStorage();

module.exports = {
    getLink: function(req, res) { 
        let folder = req.query.folder || '';
        getDownloadURL(ref(storage, `${folder}/${req.params.fileName}`))
        .then ( (url) => {
            res.json(url);
        }).catch ( (err) => {
            res.json('File not found!')
        });
    },

    upload: function (req, res) {
        const storageRef = ref(storage, `${req.params.folder}/${req.file.originalname}`);

        uploadBytes(storageRef, req.file.buffer)
            .then((snapshot) => {
            res.json("File uploaded successfully");
            })
            .catch((error) => {
            res.json("File upload failed");
            });
    }
}