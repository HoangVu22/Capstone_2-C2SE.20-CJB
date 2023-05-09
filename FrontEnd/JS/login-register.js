const registerButton1 = document.getElementById("register");
const loginButton1 = document.getElementById("login");
const loginButton = document.getElementById("login-1");
const container = document.getElementById("container");
const names = document.getElementsByClassName("header-name1");
const $ = document.querySelector.bind(document);

registerButton1.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton1.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const inputs = document.querySelectorAll("input.form-control");
  const requestValues = {};

  inputs.forEach((item) => {
    requestValues[item.attributes.name.value] = item.value;
  });
  console.log(requestValues);
  fetch("http://127.0.0.1:8000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestValues),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 200) {
        window.localStorage.setItem("login", JSON.stringify(data));
        window.localStorage.setItem("access_token", data.token);
        window.localStorage.setItem(
          "id",
          JSON.stringify(data.user_info.user_profile[0].user_id)
        );
        window.location.href = "home.html";
      } else {
        alert(data.msg);
      }
    })
    .catch((error) => console.log(error));
});

// --------------------------------------------------------------------

const registerButton = $(".resgister-1");

registerButton.onclick = (e) => {
  e.preventDefault();
  const inputs = document.querySelectorAll("input.form-input");
  const requestValues = {};

<<<<<<< HEAD
    inputs.forEach(item => {
        requestValues[item.attributes.name.value] = item.value;
    })
    fetch('http://127.0.0.1:8000/api/auth/userRegister', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestValues)
    })
        .then(response => response.json())
        .then(
            data => {
                if (data.status === 200) {
                    alert("success......");
                    window.localStorage.setItem("login", JSON.stringify(data));
                    window.location.href = 'http://localhost:3000/login-register.html'
                } else {
                    alert(data.message)
                }
            }
        )
}
=======
  inputs.forEach((item) => {
    requestValues[item.attributes.name.value] = item.value;
  });
  fetch("http://127.0.0.1:8000/api/auth/userRegister", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestValues),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 200) {
        alert("success......");
        window.location.reload();
      } else {
        alert(data.message);
      }
    });
};
>>>>>>> 86d56b7055c17dfb9cbd0a8a8f177985df01d216
