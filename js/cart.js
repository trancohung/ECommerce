function getCart() {
    if (!userLogin) return [];
    return JSON.parse(localStorage.getItem(`cart_${userLogin.username}`)) || [];
}

function saveCart(cart) {
    if (!userLogin) return [];
    localStorage.setItem(`cart_${userLogin.username}`, JSON.stringify(cart));
}

function addToCart(index) {
    if(!userLogin) {
        window.location.href= "./login.html";
        return;
    }
    const cart = getCart();
    const products = getProducts();
    const product = products[index];
    

    const existingProduct = cart.find((item) => item.name === product.name);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }
    saveCart(cart);
}

function renderCart() {
    const cart = getCart();
    const subTotalElement = document.getElementById("subTotal");
    const totalElement = document.getElementById("total");
    const cartTable = document.getElementById("cartItems");

    cartTable.innerHTML = `
        <thead>
            <tr class="border-b">
                <th class="p-4">Product</th>
                <th class="p-4">Price</th>
                <th class="p-4">Quantity</th>
                <th class="p-4">Subtotal</th>
            </tr>
        </thead>
        <tbody id="cartBody" class="text-center"></tbody>
    `;

    let totalPrice = 0;

    const cartBody = document.getElementById("cartBody");
    cart.forEach((product) => {
        const subTotal = product.price * product.quantity;
        totalPrice += subTotal;

        const row = document.createElement("tr");
        row.className = "border-b"
        row.innerHTML = `
                <td class="p-4 flex items-center gap-4">
                    <img src="${product.image}" alt="${product.name}" class="w-20 h-20 object-fit mb-4 rounded"/>
                    <p class="mt-4">${product.name}</p>
                </td>
                <td class="p-4">${product.price}.000 VND</td>
                <td class="p-4">${product.quantity}</td>
                <td class="p-4">${subTotal}.000 VND</td>
        `;
        cartBody.appendChild(row);   
    });
    subTotalElement.innerText = `${totalPrice}.000 VND`;        
    totalElement.innerText = `${totalPrice}.000 VND`;
}   




document.addEventListener("DOMContentLoaded", () => {
    renderCart();
})
