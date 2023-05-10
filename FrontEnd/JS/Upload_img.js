// import { initializeApp } from "./firebase/app";
const inputImg = document.querySelector("#photo");
const btnUpload = document.querySelector(".btn_upload")

// inputImg.onchange = (e) => {
//     console.log(e.target.files[0].name);
//     return e.target.files[0].name;
// }



// const firebaseConfig = {
//     apiKey: "AIzaSyD3J5mFyqZBgKeI-iLvmjgz73UDEDnZWDc",
//     authDomain: "capstone2-e7f77.firebaseapp.com",
//     projectId: "capstone2-e7f77",
//     storageBucket: "capstone2-e7f77.appspot.com",
//     messagingSenderId: "1040797896688",
//     appId: "1:1040797896688:web:38c020f955b4a8d7491735",
//     measurementId: "G-JM1DSBH536"
// };
// firebase.initializeApp(firebaseConfig);

const btn = document.querySelector(".d");
btn.onclick = () => {
    fetch("http://localhost:3000/firebase/" + "278580945_668189734255632_8649391358758399598_n.jpg" + "?folder=user_images", {
        mode: "no-cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    })
        // .then(res => res.text())
        .then(data => {
            console.log(data)
        });
}
btnUpload.onclick = () => {
    // const ref = firebase.storage().ref()
    // const file = document.querySelector("#photo").files[0]
    // const name = new Date() + '-' + file.name

    // const metadata = {
    //     contentType: file.type
    // }

    // const task = ref.child(name).put(file, metadata)
    // task
    //     .then(snapshot => snapshot.ref.getDownloadURL())
    //     .then(url => {
    //         alert('success');
    //         const image = document.querySelector('#image')
    //         image.src = url;
    //         const value = inputImg.value.slice(12);
    //     })
    // console.log(formData);
    var formData = new FormData();
    var fileField = document.querySelector("input[type='file']");

    formData.append('filename', fileField.files[0]);
    console.log(fileField.files[0]);
    fetch("http://localhost:3000/firebase/user_images", {
        method: 'POST',
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: formData,
    })
        // .then((res) => res.json())
        .then(data => {
            console.log(data);
        })
}

// const formData = new FormData();
// const fileField = document.querySelector('input[type="file"]');

// formData.append("filename", fileField.files[0]);

// upload(formData);