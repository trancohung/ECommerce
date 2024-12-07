const formRegister = document.getElementById("formRegister");
const userNameElement = document.getElementById("username");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");

formRegister.addEventListener("submit", (e) => {
    e.preventDefault(); // ngăn load lại trang

});

// lấy dữ liệu từ local
const userLocal = JSON.parse(localStorage.getItem("users")) || [];

// lấy dữ liệu từ form
const user = {
    userName: userNameElement.value,
    email: emailElement.value,
    password: passwordElement.value
}

// push user vào mảng userLocal
userLocal.push(user);

// lưu dữ liệu lên localStorage
localStorage.setItem("users", JSON.stringify(userLocal));