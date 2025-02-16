const products = {
    1: {
        id: 1,
        name: "Lumo",
        description: "A company to improve your life with connected products.",
        image: "../assets/img/light_sensor.jpg",
        price: 49.99,
        rating: 4.5,
        reviews: 10,
        category: "Electronics",
        tags: ["Electronics", "Smartphone", "Tablet", "Laptop", "Mobile"],
        link: "product.html"
    },
    2: {
        id: 2,
        name: "Lumo",
        description: "A company to improve your life with connected products.",
        image: "../assets/img/smart-led-light-bulbs-36813.avif",
        price: 49.99,
        rating: 4.5,
        reviews: 10,
        category: "Electronics",
        tags: ["Electronics", "Smartphone", "Tablet", "Laptop", "Mobile"],
        link: "product.html"
    },
    3: {
        id: 3,
        name: "Lumo",
        description: "A company to improve your life with connected products.",
        image: "../assets/img/smart-led-light-bulbs-36813.avif",
        price: 49.99,
        rating: 4.5,
        reviews: 10,
        category: "Electronics",
        tags: ["Electronics", "Smartphone", "Tablet", "Laptop", "Mobile"],
        link: "product.html"
    },
    4: {
        id: 4,
        name: "Lumo",
        description: "A company to improve your life with connected products.",
        image: "../assets/img/smart-led-light-bulbs-36813.avif",
        price: 49.99,
        rating: 4.5,
        reviews: 10,
        category: "Electronics",
        tags: ["Electronics", "Smartphone", "Tablet", "Laptop", "Mobile"],
        link: "product.html"
    },
    5: {
        id: 5,
        name: "Lumo",
        description: "A company to improve your life with connected products.",
        image: "../assets/img/smart-led-light-bulbs-36813.avif",
        price: 49.99,
        rating: 4.5,
        reviews: 10,
        category: "Electronics",
        tags: ["Electronics", "Smartphone", "Tablet", "Laptop", "Mobile"],
        link: "product.html"
    },
    6: {
        id: 6,
        name: "Lumo",
        description: "A company to improve your life with connected products.",
        image: "../assets/img/smart-led-light-bulbs-36813.avif",
        price: 49.99,
        rating: 4.5,
        reviews: 10,
        category: "Electronics",
        tags: ["Electronics", "Smartphone", "Tablet", "Laptop", "Mobile"],
        link: "product.html"
    }
};

const productGrid = document.getElementById("product-details");

// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"));

if (productId && products[productId]) {
    const product = products[productId];

    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
        <div class="product-image">
            <img style:"border-radius: 10px 10px 10px 10px" src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-rating">            
                <span class="product-rating-stars">
                    ${"★".repeat(Math.floor(product.rating))} ${product.rating % 1 !== 0 ? "⭐" : ""}
                </span>
                <span class="product-rating-count">(${product.reviews} reviews)</span>
            </div>
            <div class="product-price">
                <span class="product-price-currency">$</span>
                <span class="product-price-amount">${product.price.toFixed(2)}</span>
            </div>
            <div class="product-tags">
                ${product.tags.map(tag => `<span class="product-tag">${tag}</span>`).join(", ")}
            </div>
            <a href="${product.link}" class="button">
                <button class="product-link-button">Buy now</button>
            </a>
        </div>
    `;
    productGrid.appendChild(productElement);
} else {
    productGrid.innerHTML = `<p>${productId ? "Product not found" : "No product selected"}</p>`;
}
