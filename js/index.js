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

function getProduct() {
  return JSON.parse(localStorage.getItem("products")) || [];
}

function renderProducts() {
  const productList = document.querySelector("#products .items");
  productList.innerHTML = "";

  const products = getProduct();

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "border p-4 rounded shadow";

    productDiv.innerHTML = `
      <div class="border rounded">
        <img src="${product.image}" alt="${product.name}" class="w-full h-60 object-cover mb-4 rounded"/>
      </div>
      <h2 class="text-lg font-bold">${product.name}</h2>
      <div class="item-price">
        <span class="text-gray-600">${product.discount}</span>
        <span class="text-gray-600">${product.price}</span>
      </div>
      <button class="btn bg-[#DB4444] rounded w-full p-2 mt-2 text-white">Add to my Cart</button>
    `;
    productList.appendChild(productDiv);
  });
}

renderProducts();