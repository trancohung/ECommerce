const formRegister = document.getElementById("formRegister");
const userNameElement = document.getElementById("username");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
console.log("Hello");
// lấy dữ liệu từ local
const userLocal = JSON.parse(localStorage.getItem("users")) || [];
formRegister.addEventListener("submit", (e) => {
    e.preventDefault(); // ngăn load lại trang
    // gửi dữ liệu từ form lên localStorage
    if (userNameElement.value && emailElement.value && passwordElement.value) {
        // lấy dữ liệu từ form 
        const user = {
            username: userNameElement.value,
            email: emailElement.value,
            password: passwordElement.value
        }
    
        // push user vào mảng userLocal
        userLocal.push(user);
    
        // lưu dữ liệu lên localStorage
        localStorage.setItem("users", JSON.stringify(userLocal));
    
        // chuyển hướng về trang đăng nhập
        window.location.href = "./login.html";
    
    }
    
});

