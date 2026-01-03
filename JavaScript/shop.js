// Products Database
const products = [
    {
        id: 1,
        name: "Premium Monocrystalline Solar Panel",
        category: "panels",
        price: 299,
        image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600",
        description: "High-efficiency 400W monocrystalline solar panel with premium grade silicon cells. Perfect for residential installations with limited roof space.",
        specs: ["Power: 400W", "Efficiency: 21.5%", "Warranty: 25 years", "Dimensions: 75.5 x 39.4 inches"]
    },
    {
        id: 2,
        name: "Standard Polycrystalline Panel",
        category: "panels",
        price: 199,
        image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600",
        description: "Reliable 300W polycrystalline solar panel offering great value for money. Ideal for large-scale installations.",
        specs: ["Power: 300W", "Efficiency: 17.5%", "Warranty: 20 years", "Dimensions: 65.0 x 39.0 inches"]
    },
    {
        id: 3,
        name: "Bifacial Solar Panel",
        category: "panels",
        price: 399,
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600",
        description: "Advanced bifacial technology captures sunlight from both sides, increasing energy yield by up to 30%.",
        specs: ["Power: 450W", "Efficiency: 22.8%", "Warranty: 30 years", "Dimensions: 82.0 x 40.0 inches"]
    },
    {
        id: 4,
        name: "Lithium Battery Storage System",
        category: "batteries",
        price: 4999,
        image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=600",
        description: "10kWh lithium-ion battery storage with intelligent energy management. Store excess solar energy for nighttime use.",
        specs: ["Capacity: 10kWh", "Voltage: 48V", "Warranty: 10 years", "Cycles: 6000+"]
    },
    {
        id: 5,
        name: "Home Battery Backup",
        category: "batteries",
        price: 3499,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
        description: "Compact 5kWh battery system perfect for homes. Provides backup power during outages.",
        specs: ["Capacity: 5kWh", "Voltage: 48V", "Warranty: 8 years", "Weight: 110 lbs"]
    },
    {
        id: 6,
        name: "Hybrid Solar Inverter",
        category: "inverters",
        price: 1499,
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600",
        description: "5kW hybrid inverter with built-in MPPT charge controller and real-time monitoring capabilities.",
        specs: ["Power: 5kW", "Efficiency: 97.5%", "Warranty: 10 years", "Max Input: 600V"]
    },
    {
        id: 7,
        name: "Grid-Tie Micro Inverter",
        category: "inverters",
        price: 299,
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600",
        description: "High-efficiency micro inverter for individual panel optimization. Easy installation and monitoring.",
        specs: ["Power: 300W", "Efficiency: 96.5%", "Warranty: 15 years", "IP67 Rated"]
    },
    {
        id: 8,
        name: "Off-Grid Power Inverter",
        category: "inverters",
        price: 1899,
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600",
        description: "6kW pure sine wave inverter designed for off-grid solar systems with battery integration.",
        specs: ["Power: 6kW", "Surge: 12kW", "Warranty: 8 years", "Output: Pure Sine Wave"]
    },
    {
        id: 9,
        name: "Solar Mounting Kit",
        category: "accessories",
        price: 149,
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600",
        description: "Complete mounting system for roof installation. Includes rails, clamps, and all necessary hardware.",
        specs: ["Material: Aluminum", "Panels: Up to 6", "Warranty: 15 years", "Corrosion resistant"]
    },
    {
        id: 10,
        name: "Solar Cable Kit",
        category: "accessories",
        price: 89,
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600",
        description: "Professional grade solar cables with MC4 connectors. UV resistant and weather-proof.",
        specs: ["Length: 50ft", "Gauge: 10AWG", "Voltage: 600V", "Temperature: -40°C to 90°C"]
    },
    {
        id: 11,
        name: "Charge Controller MPPT",
        category: "accessories",
        price: 349,
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600",
        description: "Maximum Power Point Tracking charge controller for optimal energy harvest from solar panels.",
        specs: ["Current: 40A", "Voltage: 12/24/48V", "Efficiency: 98%", "LCD Display"]
    },
    {
        id: 12,
        name: "Solar Monitoring System",
        category: "accessories",
        price: 199,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
        description: "Real-time monitoring system with mobile app. Track energy production and system performance.",
        specs: ["Connectivity: WiFi", "App: iOS/Android", "Data Logging: Cloud", "Alerts: Email/SMS"]
    }
];

// Cart array
let cart = [];

// Current product for modal
let currentProduct = null;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    updateCartUI();
});

// Load products
function loadProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    
    products.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => openProductModal(product);
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3>${product.name}</h3>
            <p>${product.description.substring(0, 80)}...</p>
            <div class="product-specs">
                ${product.specs.slice(0, 2).map(spec => `<span class="spec-item">${spec}</span>`).join('')}
            </div>
            <div class="product-footer">
                <div class="product-price">$${product.price}</div>
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Open product modal
function openProductModal(product) {
    currentProduct = product;
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalPrice').textContent = `$${product.price}`;
    document.getElementById('modalQuantity').value = 1;
    
    const specsHTML = `
        <h4>Specifications</h4>
        <ul>
            ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
        </ul>
    `;
    document.getElementById('modalSpecs').innerHTML = specsHTML;
    
    document.getElementById('modalAddToCart').onclick = () => {
        const quantity = parseInt(document.getElementById('modalQuantity').value);
        addToCart(product.id, quantity);
    };
    
    document.getElementById('productModal').classList.add('active');
}

// Close modal
function closeModal() {
    document.getElementById('productModal').classList.remove('active');
}

// Quantity controls
function increaseQuantity() {
    const input = document.getElementById('modalQuantity');
    input.value = parseInt(input.value) + 1;
}

function decreaseQuantity() {
    const input = document.getElementById('modalQuantity');
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

// Add to cart
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    updateCartUI();
    showNotification(`${product.name} added to cart!`);
}

// Update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotal.textContent = '$0';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>$${item.price} each</p>
                <div class="cart-item-controls">
                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">×</button>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartUI();
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// Toggle cart
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Checkout complete! Total: $${total.toFixed(2)}\n\nThank you for your purchase!`);
    cart = [];
    updateCartUI();
    toggleCart();
}

// Filter products
function filterProducts() {
    const category = document.getElementById('category').value;
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    
    const filtered = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    filtered.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });
}

// Sort products
function sortProducts() {
    const sortBy = document.getElementById('sort').value;
    let sorted = [...products];
    
    switch(sortBy) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    sorted.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });
}

// Search products
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(searchTerm) || 
        p.description.toLowerCase().includes(searchTerm)
    );
    
    if (filtered.length === 0) {
        grid.innerHTML = '<p style="text-align: center; padding: 3rem; color: #999;">No products found</p>';
        return;
    }
    
    filtered.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });
}

// Toggle menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #0a0a0a;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        z-index: 4000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);