const registerButton1 = document.getElementById('register')
const loginButton1 = document.getElementById('login')
const loginButton = document.getElementById('login-1')
const container = document.getElementById('container')
const names = document.getElementsByClassName('header-name1');

registerButton1.addEventListener('click', () => {
    container.classList.add('right-panel-active')
})

loginButton1.addEventListener('click', () => {
    container.classList.remove('right-panel-active')
})

loginButton.onclick = () => {
    const inputs = document.querySelectorAll('input.form-control');
    const requestValues = {};

    inputs.forEach(item => {
        requestValues[item.attributes.name.value] = item.value;
    });
    fetch('http://127.0.0.1:8000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestValues)
    })
        .then(response => response.json())
        .then(data => {
            if (data.status === 200) {
                window.localStorage.setItem("login", JSON.stringify(data));
                window.localStorage.setItem("id", JSON.stringify(data.user_info.user_profile[0].id))
                window.location.href = 'http://localhost:3000/FrontEnd/HTML/TS-home.html';
            } else {
                alert(data.msg)
            }
        })
}

// --------------------------------------------------------------------

const $ = document.querySelector.bind(document);

const registerButton = $('.resgister-1');

registerButton.onclick = () => {
    const inputs = document.querySelectorAll('input.form-input')
    const requestValues = {}

    inputs.forEach(item => {
        requestValues[item.attributes.name.value] = item.value;
    })
    fetch('http://127.0.0.1:8000/api/auth/tsRegister', {
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
                    window.location.href = 'http://localhost:3000/FrontEnd/HTML/home.html'
                } else {
                    alert(data.message)
                }
            }
        )
}