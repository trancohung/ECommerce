const formLogin = document.getElementById("formLogin");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");

// lấy dữ liệu từ local về
const userLocal = JSON.parse(localStorage.getItem("users") || []);

formLogin.addEventListener("submit", (e) => {
    // ngăn load lại trang
    e.preventDefault();

    // tìm email và password trùng khớp
    const findUser = userLocal.find((user) =>
        user.email === emailElement.value &&
        user.password === passwordElement.value
    );

    if (!findUser) {
        alert("Email hoặc mật khẩu không đúng");
    } else {
        // lưu thông tin đăng nhập của user lên local
        localStorage.setItem("userLogin", JSON.stringify(findUser));
       
        window.location.href = "./index.html";

    }

});