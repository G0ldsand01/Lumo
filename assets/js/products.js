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

document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.getElementById("products-grid");

    // Iterate over products using Object.values
    Object.values(products).forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-rating">Rating: ${product.rating} ★</div>
                <div class="product-reviews">${product.reviews} Reviews</div>
                <div class="product-tags">Tags: ${product.tags.join(", ")}</div>
                <a href="product.html?id=${product.id}" class="button">
                    <button class="product-link-button">View Details</button>
                </a>
            </div>
        `;
        productGrid.appendChild(productElement);
    });

    // Optional: Smooth scroll to the product grid
    window.scrollTo({ top: productGrid.offsetTop, behavior: "smooth" });
});
