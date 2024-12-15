function checkUserLogin() {
    const userLogin = JSON.parse(localStorage.getItem("userLogin"));
    const signUp = document.getElementById("signUp");
    const addProductItem = document.getElementById("addProductItem");
    const userLoginElement = document.getElementById("userLogin");
    if (!userLogin) {
        addProductItem.style.display = "none";
        userLogin.style.display = "none";
        addProductItem.style.display = "none";
    } else {
        signUp.innerHTML = "Log Out";
        userLoginElement.innerHTML = userLogin.username;

        if (userLogin.role === "admin") {
            addProductItem.style.display = "block";
        } else {
            addProductItem.style.display = "none";
        }

        signUp.addEventListener("click", () => {
            localStorage.removeItem("userLogin"); // đăng xuất
            window.location.href = "./index.html";
        })
    }
}

checkUserLogin();