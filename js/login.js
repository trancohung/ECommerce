const formLogin = document.getElementById("formLogin");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");

formLogin.addEventListener("submit", (e) => {
    // ngăn load lại trang
    e.preventDefault();

    // lấy dữ liệu từ local về
    const userLocal = JSON.parse(localStorage.getItem("users") || []);

    // tìm email và password của người dùng nhập vào có tồn tại trên local?
    const findUser = userLocal.find((user) =>
        user.email === emailElement.value &&
        user.password === passwordElement.value
    );

    if (!findUser) {
        alert("Email hoặc mật khẩu không đúng");
    } else {
        window.location.href = "./index.html";

        // lưu thông tin đăng nhập của user lên local
        localStorage.setItem("userLogin", JSON.stringify(findUser));
    }

});