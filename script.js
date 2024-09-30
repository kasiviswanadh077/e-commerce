// Sample product data
const products = [
    {
        id: 1,
        name: "Smartphone",
        description: "Latest model with all new features.",
        price: "$499",
        image: "https://via.placeholder.com/300.png?text=Smartphone"
    },
    {
        id: 2,
        name: "Laptop",
        description: "High performance laptop for professionals.",
        price: "$899",
        image: "https://via.placeholder.com/300.png?text=Laptop"
    },
    {
        id: 3,
        name: "Headphones",
        description: "Noise-cancelling wireless headphones.",
        price: "$199",
        image: "https://via.placeholder.com/300.png?text=Headphones"
    },
    {
        id: 4,
        name: "Smartwatch",
        description: "Stylish smartwatch with health tracking.",
        price: "$149",
        image: "https://via.placeholder.com/300.png?text=Smartwatch"
    },
    {
        id: 5,
        name: "Formal Dresses for Boys",
        description: "Stylish smartwatch with health tracking.",
        price: "$149",
        image: "https://via.placeholder.com/300.png?text=Dress"
    },
    {
        id: 6,
        name: "Formal Dresses for Girls",
        description: "Stylish smartwatch with health tracking.",
        price: "$149",
        image: "https://via.placeholder.com/300.png?text=Dress"
    },
    {
        id: 7,
        name: "Electronics",
        description: "Stylish smartwatch with health tracking.",
        price: "$149",
        image: "https://via.placeholder.com/300.png?text=Smartwatch"
    },
    {
        id: 8,
        name: "Home Appliances",
        description: "Stylish smartwatch with health tracking.",
        price: "$149",
        image: "https://via.placeholder.com/300.png?text=Smartwatch"
    },
    {
        id: 9,
        name: "Smartphone",
        description: "Latest model with all new features.",
        price: "$499",
        image: "https://via.placeholder.com/300.png?text=Smartphone"
    },
    {
        id: 10,
        name: "Laptop",
        description: "High performance laptop for professionals.",
        price: "$899",
        image: "https://via.placeholder.com/300.png?text=Laptop"
    },
    {
        id: 11,
        name: "Headphones",
        description: "Noise-cancelling wireless headphones.",
        price: "$199",
        image: "https://via.placeholder.com/300.png?text=Headphones"
    },
    {
        id: 12,
        name: "Smartwatch",
        description: "Stylish smartwatch with health tracking.",
        price: "$149",
        image: "https://via.placeholder.com/300.png?text=Smartwatch"
    },
    {
        id: 13,
        name: "Formal Dresses for Boys",
        description: "Stylish smartwatch with health tracking.",
        price: "$149",
        image: "https://via.placeholder.com/300.png?text=Dress"
    },
    {
        id: 14,
        name: "Formal Dresses for Girls",
        description: "Stylish smartwatch with health tracking.",
        price: "$149",
        image: "https://via.placeholder.com/300.png?text=Dress"
    },
    {
        id: 15,
        name: "Electronics",
        description: "Stylish smartwatch with health tracking.",
        price: "$149",
        image: "https://via.placeholder.com/300.png?text=Smartwatch"
    },
    {
        id: 16,
        name: "Home Appliances",
        description: "Stylish smartwatch with health tracking.",
        price: "$149",
        image: "https://via.placeholder.com/300.png?text=Smartwatch"
    }
];

// Function to display products on the page
function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-details">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p><strong>${product.price}</strong></p>
                <button onclick="addToCart('${product.name}')">Add to Cart</button>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

// Function to handle adding a product to the cart
function addToCart(productName) {
    alert(`${productName} has been added to your cart!`);
}

// Load products when the page is loaded
window.onload = displayProducts;
