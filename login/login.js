const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');

})

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
    
})

function login() {
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();

    if (email === "admin@admin.com" && password === "password") {
        document.getElementById("message").innerHTML = "You are logged in";
        window.open("../home/index.html", "_blank");
    } else {
        document.getElementById("message").innerHTML = "Invalid email or password!";
    }
}