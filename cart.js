let cart = [];

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    alert(product.name + " added to cart");
}