const products = [
    { id: 1, name: "iPhone 15", price: 80000 },
    { id: 2, name: "Laptop Dell", price: 65000 },
    { id: 3, name: "Headphones", price: 2000 }
];

function renderProducts() {
    let container = document.getElementById("products");

    products.forEach(p => {
        container.innerHTML += `
            <div class="card">
                <h3>${p.name}</h3>
                <p>₹${p.price}</p>
                <button onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        `;
    });
}

renderProducts();