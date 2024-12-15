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

function getProduct() {
  return JSON.parse(localStorage.getItem("products")) || [];
}

function renderProducts() {
  const productList = document.querySelector("#products .items");
  productList.innerHTML = "";

  const products = getProduct();

  products.forEach((product, index) => {
    const productDiv = document.createElement("div");
    productDiv.className = "border p-4 rounded shadow";

    productDiv.innerHTML = `
      <div class="border rounded">
        <img src="${product.image}" alt="${product.name}" class="w-full h-60 object-cover mb-4 rounded"/>
      </div>
      <h2 class="text-lg font-bold">${product.name}</h2>
      <div class="flex gap-2">
        <p class="text-gray-600 line-through font-light">${product.price}.000 VND</p>
        <p class="text-red-600">${product.discount}%</p>
        <p class="text-gray-600">${product.finalPrice}.000 VND</p>
      </div>
      <button onclick="addToCart(${index})" class="btn bg-[#DB4444] rounded w-full p-2 mt-2 text-white">Add to my Cart</button>
    `;
    productList.appendChild(productDiv);
  });
}

renderProducts();