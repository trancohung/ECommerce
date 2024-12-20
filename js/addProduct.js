// const defaultProducts = [
//     {
//         image: "./Assets/Frame-604.png",
//         name: "Breed Dry Dog Food",
//         price: 100,
//         discount: 10
//     },
//     {
//         image: "./Assets/Frame-605.png",
//         name: "CANON EOS DSLR Camera",
//         price: 360,
//         discount: 10
//     },
//     {
//         image: "./Assets/Frame-606.png",
//         name: "ASUS FHD Gaming Laptop",
//         price: 700,
//         discount: 10
//     },
//     {
//         image: "./Assets/North-coat.png",
//         name: "North Coat",
//         price: 200,
//         discount: 10
//     },
//     {
//         image: "./Assets/Frame-608.png",
//         name: "Kds Electric Car",
//         price: 960,
//         discount: 10
//     },
//     {
//         image: "./Assets/Frame-609.png",
//         name: "Jr.Zoom Soccer Cleats",
//         price: 1.160,
//         discount: 10
//     },
//     {
//         image: "./Assets/Frame-610.png",
//         name: "GP11 Shooter USB Gamepad",
//         price: 660,
//         discount: 10
//     },
//     {
//         image: "./Assets/Frame-611.png",
//         name: "Quilted Satin Jacket",
//         price: 560,
//         discount: 10
//     },
// ]
function getProducts() {
    return JSON.parse(localStorage.getItem("products")) || [];
}

function saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
}

function addProduct(image, name, price, discount) {
    if (!image || !name || !price || !discount) {
        alert("Xin đừng bỏ trống!");
    }

    const finalPrice = price * (1 - discount /100);
    const products = getProducts();
    products.push({ image, name, price, discount, finalPrice});
    saveProducts(products);
    renderProducts();
}


function renderProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    const products = getProducts();

    products.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.className = "border p-4 rounded shadow";

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="w-full h-60 object-cover mb-4 rounded">
            <h2 class="text-lg font-bold">${product.name}</h2>
            <div class="flex gap-2">
                <p class="text-gray-600 line-through font-light">${product.price}.000 VND</p>
                <p class="text-red-600">${product.discount}%</p>
                <p class="text-gray-600">${product.finalPrice}.000 VND</p>

            </div>
            <div class="flex gap-2">
                <button class="bg-[#DB4444] rounded w-2/3 p-2 mt-2 text-white">
                    <a href="#">Chi tiết sản phẩm</a>
                </button>
                <button class="bg-[#DB4444] rounded w-1/3 p-2 mt-2 text-white" onclick="deleteProduct(${index})">Xóa</button>
            </div>
        `;
        productList.appendChild(productDiv);
    })
}

function deleteProduct(index) {
    const products = getProducts();
    products.splice(index, 1);
    saveProducts(products);
    renderProducts();
}

document.getElementById("addProductBtn").addEventListener("click", () => {
    const image = document.getElementById("productImage").value;
    const name = document.getElementById("productName").value;
    const price = document.getElementById("productPrice").value;
    const discount = document.getElementById("productDiscount").value;
    addProduct(image, name, price, discount);
    document.getElementById("productImage").value = "";
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productDiscount").value = "";
})

renderProducts();