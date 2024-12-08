const menuItems = [
  "Women's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
]

const container = document.querySelector(".space-y-4");
menuItems.forEach(item => {
    const template = document.getElementById("menu-item").content.cloneNode(true);
    template.querySelector("a").textContent = item;
    container.appendChild(template);
})

// lấy dữ liệu trên local
const userLogin = JSON.parse(localStorage.getItem("userLogin"));
const userLoginElement = document.getElementById("userLogin");

if (userLogin) {
  userLoginElement.innerHTML = userLogin.username;
} else {
  userLoginElement.innerHTML = "";
}