const products = [
    // Notebooks (já existentes + 1 novo)
    {
        id: 1,
        name: "Notebook Asus Vivobook",
        category: "Notebook",
        price: 1656.65,
        rating: 4.8,
        description: `Um estilo que impressiona...`, // Mantido igual
        image: "assets/images/Asus-vivobook.png",
        specs: {
            "Processador": "Intel Core i3",
            "Memória RAM": "4GB",
            "Armazenamento": "SSD 128GB",
            "Tela": "1920 x 1080",
            "Sistema Operacional": "Windows 11",
            "Bateria": "8 horas de duração"
        } // Mantido igual
    },
    {
        id: 2,
        name: "Notebook Ultra",
        category: "Notebook",
        price: 1609.09,
        rating: 4.7,
        description: `Para quem busca tecnologia...`, // Mantido igual
        image: "assets/images/Notebook-ultra.png",
        specs: {
            "Processador": "Intel I3",
            "Memória RAM": "4GB",
            "Armazenamento": "128GB",
            "Tela": "1920 x 1350",
            "Sistema operacional": "Windows 11",
            "Bateria": "8 horas de duração"
        } // Mantido igual
    },
    {
        id: 3,
        name: "Notebook Dell Inspiron",
        category: "Notebook",
        price: 3104.10,
        rating: 4.9,
        description: `Mobilidade e conectividade práticas...`, // Mantido igual
        image: "assets/images/Notebook-dell-inspiron.png",
        specs: {
            "Processador": "Apple A15 Bionic",
            "Memória RAM": "6GB",
            "Armazenamento": "128GB",
            "Tela": "10.9\" Liquid Retina",
            "Câmera Traseira": "12MP",
            "Bateria": "Até 10 horas"
        } // Mantido igual
    },
    {
        id: 4,
        name: "MacBook Air M2",
        category: "Notebook",
        price: 8999.00,
        rating: 4.9,
        description: `Potência e portabilidade. O notebook mais fino e leve da Apple com chip M2, tela Retina e até 18 horas de bateria.`,
        image: "assets/images/macbook-air.png",
        specs: {
            "Processador": "Apple M2",
            "Memória RAM": "8GB",
            "Armazenamento": "256GB SSD",
            "Tela": "13.6\" Liquid Retina",
            "Sistema Operacional": "macOS",
            "Bateria": "Até 18 horas"
        }
    },

    // Celulares (8 novos)
    {
        id: 5,
        name: "iPhone 15 Pro",
        category: "Celular",
        price: 7999.00,
        rating: 4.9,
        description: `O smartphone mais avançado da Apple com chip A17 Pro, câmera tripla e design em titânio.`,
        image: "assets/images/iphone15.png",
        specs: {
            "Processador": "Apple A17 Pro",
            "Memória RAM": "8GB",
            "Armazenamento": "256GB",
            "Tela": "6.1\" Super Retina XDR",
            "Câmera": "48MP + 12MP + 12MP",
            "Bateria": "Até 23 horas"
        }
    },
    {
        id: 6,
        name: "Samsung Galaxy S23 Ultra",
        category: "Celular",
        price: 7549.00,
        rating: 4.8,
        description: `Smartphone top de linha com câmera de 200MP, caneta S-Pen integrada e processador Snapdragon 8 Gen 2.`,
        image: "assets/images/s23-ultra.png",
        specs: {
            "Processador": "Snapdragon 8 Gen 2",
            "Memória RAM": "12GB",
            "Armazenamento": "512GB",
            "Tela": "6.8\" Dynamic AMOLED",
            "Câmera": "200MP + 12MP + 10MP + 10MP",
            "Bateria": "5000mAh"
        }
    },
    {
        id: 7,
        name: "Google Pixel 8 Pro",
        category: "Celular",
        price: 5299.00,
        rating: 4.7,
        description: `Smartphone com o melhor do Google, câmera avançada com IA e atualizações garantidas por 7 anos.`,
        image: "assets/images/pixel8.png",
        specs: {
            "Processador": "Google Tensor G3",
            "Memória RAM": "12GB",
            "Armazenamento": "256GB",
            "Tela": "6.7\" OLED",
            "Câmera": "50MP + 48MP + 48MP",
            "Bateria": "5050mAh"
        }
    },
    {
        id: 8,
        name: "Xiaomi 13T Pro",
        category: "Celular",
        price: 3499.00,
        rating: 4.6,
        description: `Potência máxima com processador MediaTek Dimensity e carregamento ultra-rápido de 120W.`,
        image: "assets/images/xiaomi13t.png",
        specs: {
            "Processador": "Dimensity 9200+",
            "Memória RAM": "12GB",
            "Armazenamento": "512GB",
            "Tela": "6.67\" AMOLED",
            "Câmera": "50MP + 12MP + 8MP",
            "Bateria": "5000mAh"
        }
    },
    {
        id: 9,
        name: "Motorola Edge 40",
        category: "Celular",
        price: 2299.00,
        rating: 4.5,
        description: `Design premium com bordas curvas, câmera de 50MP e carregamento sem fio.`,
        image: "assets/images/moto-edge.png",
        specs: {
            "Processador": "Dimensity 8020",
            "Memória RAM": "8GB",
            "Armazenamento": "256GB",
            "Tela": "6.55\" pOLED",
            "Câmera": "50MP + 13MP",
            "Bateria": "4400mAh"
        }
    },
    {
        id: 10,
        name: "OnePlus 11",
        category: "Celular",
        price: 4299.00,
        rating: 4.7,
        description: `Performance flagship com carregamento de 100W e parceria Hasselblad para fotografia.`,
        image: "assets/images/oneplus11.png",
        specs: {
            "Processador": "Snapdragon 8 Gen 2",
            "Memória RAM": "16GB",
            "Armazenamento": "256GB",
            "Tela": "6.7\" LTPO3 AMOLED",
            "Câmera": "50MP + 48MP + 32MP",
            "Bateria": "5000mAh"
        }
    },
    {
        id: 11,
        name: "Samsung Galaxy Z Flip5",
        category: "Celular",
        price: 6999.00,
        rating: 4.8,
        description: `Smartphone dobrável com tampa externa personalizável e design compacto.`,
        image: "assets/images/zflip5.png",
        specs: {
            "Processador": "Snapdragon 8 Gen 2",
            "Memória RAM": "8GB",
            "Armazenamento": "512GB",
            "Tela": "6.7\" Dynamic AMOLED",
            "Câmera": "12MP + 12MP",
            "Bateria": "3700mAh"
        }
    },
    {
        id: 12,
        name: "iPhone SE (3ª geração)",
        category: "Celular",
        price: 2999.00,
        rating: 4.4,
        description: `Compacto e poderoso com chip A15 Bionic em design clássico.`,
        image: "assets/images/iphone-se.png",
        specs: {
            "Processador": "Apple A15 Bionic",
            "Memória RAM": "4GB",
            "Armazenamento": "128GB",
            "Tela": "4.7\" Retina HD",
            "Câmera": "12MP",
            "Bateria": "Até 15 horas"
        }
    },

    // Fones (6 novos)
    {
        id: 13,
        name: "Sony WH-1000XM5",
        category: "Fone",
        price: 1999.00,
        rating: 4.9,
        description: `Fones over-ear com cancelamento de ruído líder do mercado e som de alta fidelidade.`,
        image: "assets/images/sony-xm5.png",
        specs: {
            "Tipo": "Over-ear",
            "Conexão": "Bluetooth 5.2",
            "Cancelamento de Ruído": "Sim",
            "Bateria": "Até 30 horas",
            "Microfone": "8 microfones",
            "Resistência": "IPX4"
        }
    },
    {
        id: 14,
        name: "Apple AirPods Pro (2ª geração)",
        category: "Fone",
        price: 1799.00,
        rating: 4.8,
        description: `Fones intra-auriculares com cancelamento de ruído adaptativo e som espacial.`,
        image: "assets/images/airpods-pro.png",
        specs: {
            "Tipo": "Intra-auricular",
            "Conexão": "Bluetooth 5.3",
            "Cancelamento de Ruído": "Ativo",
            "Bateria": "Até 6h (30h com case)",
            "Microfone": "Memss integrados",
            "Resistência": "IP54"
        }
    },
    {
        id: 15,
        name: "JBL Tune 510BT",
        category: "Fone",
        price: 299.00,
        rating: 4.3,
        description: `Fones on-ear com som JBL Pure Bass e bateria de longa duração.`,
        image: "assets/images/jbl-tune.png",
        specs: {
            "Tipo": "On-ear",
            "Conexão": "Bluetooth 5.0",
            "Cancelamento de Ruído": "Passivo",
            "Bateria": "Até 40 horas",
            "Microfone": "Integrado",
            "Resistência": "Não"
        }
    },
    {
        id: 16,
        name: "Samsung Galaxy Buds2 Pro",
        category: "Fone",
        price: 899.00,
        rating: 4.7,
        description: `Fones compactos com áudio 24-bit Hi-Fi e design ergonômico.`,
        image: "assets/images/buds2-pro.png",
        specs: {
            "Tipo": "Intra-auricular",
            "Conexão": "Bluetooth 5.3",
            "Cancelamento de Ruído": "Inteligente",
            "Bateria": "Até 8h (30h com case)",
            "Microfone": "3 por fone",
            "Resistência": "IPX7"
        }
    },
    {
        id: 17,
        name: "Beats Studio Pro",
        category: "Fone",
        price: 1599.00,
        rating: 4.6,
        description: `Fones over-ear com cancelamento de ruído adaptativo e som espacial personalizado.`,
        image: "assets/images/beats-pro.png",
        specs: {
            "Tipo": "Over-ear",
            "Conexão": "Bluetooth 5.3",
            "Cancelamento de Ruído": "Adaptativo",
            "Bateria": "Até 40 horas",
            "Microfone": "6 microfones",
            "Resistência": "Não"
        }
    },
    {
        id: 18,
        name: "Xiaomi Redmi Buds 4 Pro",
        category: "Fone",
        price: 349.00,
        rating: 4.2,
        description: `Fones com ANC duplo e latência ultrabaixa para jogos.`,
        image: "assets/images/redmi-buds.png",
        specs: {
            "Tipo": "Intra-auricular",
            "Conexão": "Bluetooth 5.3",
            "Cancelamento de Ruído": "ANC 43dB",
            "Bateria": "Até 9h (36h com case)",
            "Microfone": "3 por fone",
            "Resistência": "IP54"
        }
    },

    // Tablets (6 novos)
    {
        id: 19,
        name: "iPad Pro 12.9\"",
        category: "Tablet",
        price: 10999.00,
        rating: 4.9,
        description: `Tablet profissional com tela Liquid Retina XDR e chip M2 para desempenho extremo.`,
        image: "assets/images/ipad-pro.png",
        specs: {
            "Processador": "Apple M2",
            "Memória RAM": "16GB",
            "Armazenamento": "1TB SSD",
            "Tela": "12.9\" Mini-LED",
            "Sistema Operacional": "iPadOS",
            "Bateria": "Até 10 horas"
        }
    },
    {
        id: 20,
        name: "Samsung Galaxy Tab S9 Ultra",
        category: "Tablet",
        price: 8999.00,
        rating: 4.8,
        description: `Tablet premium com caneta S-Pen inclusa, tela Dynamic AMOLED e processador Snapdragon 8 Gen 2.`,
        image: "assets/images/tab-s9.png",
        specs: {
            "Processador": "Snapdragon 8 Gen 2",
            "Memória RAM": "12GB",
            "Armazenamento": "512GB",
            "Tela": "14.6\" AMOLED",
            "Sistema Operacional": "Android",
            "Bateria": "11200mAh"
        }
    },
    {
        id: 21,
        name: "Lenovo Tab P12 Pro",
        category: "Tablet",
        price: 4299.00,
        rating: 4.5,
        description: `Tablet com tela OLED de 12.6\" perfeito para produtividade e entretenimento.`,
        image: "assets/images/p12-pro.png",
        specs: {
            "Processador": "Snapdragon 870",
            "Memória RAM": "8GB",
            "Armazenamento": "256GB",
            "Tela": "12.6\" OLED",
            "Sistema Operacional": "Android",
            "Bateria": "10200mAh"
        }
    },
    {
        id: 22,
        name: "iPad Air (5ª geração)",
        category: "Tablet",
        price: 5999.00,
        rating: 4.7,
        description: `Tablet versátil com chip M1, suporte para Magic Keyboard e Apple Pencil 2.`,
        image: "assets/images/ipad-air.png",
        specs: {
            "Processador": "Apple M1",
            "Memória RAM": "8GB",
            "Armazenamento": "256GB",
            "Tela": "10.9\" Liquid Retina",
            "Sistema Operacional": "iPadOS",
            "Bateria": "Até 10 horas"
        }
    },
    {
        id: 23,
        name: "Xiaomi Pad 6",
        category: "Tablet",
        price: 2599.00,
        rating: 4.4,
        description: `Tablet com tela 2.8K de 144Hz e processador Snapdragon 870 para alta performance.`,
        image: "assets/images/xiaomi-pad.png",
        specs: {
            "Processador": "Snapdragon 870",
            "Memória RAM": "8GB",
            "Armazenamento": "256GB",
            "Tela": "11\" IPS LCD",
            "Sistema Operacional": "Android",
            "Bateria": "8840mAh"
        }
    },
    {
        id: 24,
        name: "Amazon Fire Max 11",
        category: "Tablet",
        price: 1299.00,
        rating: 4.0,
        description: `Tablet econômico com foco em entretenimento e integração com serviços Amazon.`,
        image: "assets/images/fire-max.png",
        specs: {
            "Processador": "Octa-core 2.2 GHz",
            "Memória RAM": "4GB",
            "Armazenamento": "128GB",
            "Tela": "11\" IPS",
            "Sistema Operacional": "Fire OS",
            "Bateria": "Até 14 horas"
        }
    }
];

// Estado do carrinho
let cart = [];

// Elementos DOM
const productsGrid = document.getElementById('products-grid');
const searchInput = document.getElementById('search-input');
const cartIcon = document.getElementById('cart-icon');
const cartCount = document.getElementById('cart-count');
const productModal = document.getElementById('product-modal');
const closeModal = document.getElementById('close-modal');
const modalContent = document.querySelector('.modal-content');
const cartContainer = document.getElementById('cart-container');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const paymentModal = document.getElementById('payment-modal');
const closePaymentModal = document.getElementById('close-payment-modal');
const paymentForm = document.getElementById('payment-form');
const paymentOptions = document.querySelectorAll('.payment-option');
const cashField = document.getElementById('cash-field');
const paymentMethodInput = document.getElementById('payment-method');

// Renderizar produtos
function renderProducts(productsArray) {
    productsGrid.innerHTML = '';

    productsArray.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
                    <div class="product-img">
                        <img src="${product.image}" alt="">
                    </div>
                    <div class="product-info">
                        <div class="product-category"> <i class="fas fa-shopping-cart"></i> ${product.category}</div>
                        <h3 class="product-name"><i class="fas fa-user"></i>${product.name}</h3>
                        <p>Clique no card e veja mais detalhes</p>
                        <div class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}<i class="fab fa-sell"></i></div>
                        <div class="product-rating">
                            ${'<i class="fas fa-star"></i>'.repeat(Math.floor(product.rating))}
                            ${product.rating % 1 >= 0.5 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                            <span> (${product.rating})</span>
                        </div>
                        <button class="add-to-cart-btn" data-id="${product.id}">
                            <i class="fas fa-shopping-cart"></i> Adicionar ao Carrinho
                        </button>
                    </div>
                `;

        // Abrir modal ao clicar no card
        productCard.addEventListener('click', (e) => {
            if (!e.target.classList.contains('add-to-cart-btn')) {
                openProductModal(product);
            }
        });

        // Adicionar ao carrinho
        const addToCartBtn = productCard.querySelector('.add-to-cart-btn');
        addToCartBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(product.id);
        });

        productsGrid.appendChild(productCard);
    });
}

// Abrir modal do produto
function openProductModal(product) {
    modalContent.innerHTML = `
                <div class="modal-product">
                    <div class="modal-img-container">
                       <img src="${product.image}" alt="">
                    </div>
                    <div class="modal-product-details">
                        <div class="modal-category"><i class="fas fa-shopping-cart"></i>${product.category}</div>
                        <h2 class="modal-name"><i class="fas fa-user"></i>${product.name}</h2>
                        <div class="modal-price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
                        <div class="modal-rating">
                            ${'<i class="fas fa-star"></i>'.repeat(Math.floor(product.rating))}
                            ${product.rating % 1 >= 0.5 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                            <span> (${product.rating})</span>
                        </div>
                        <p class="modal-description">${product.description}</p>
                        
                        <div class="modal-actions">
                            <div class="quantity-control">
                                <button class="quantity-btn minus" data-id="${product.id}">-</button>
                                <input type="number" class="quantity-input" value="1" min="1" data-id="${product.id}">
                                <button class="quantity-btn plus" data-id="${product.id}">+</button>
                            </div>
                            <button class="modal-add-to-cart" data-id="${product.id}">
                                <i class="fas fa-shopping-cart"></i> Adicionar
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="modal-specs">
                    <h3 class="specs-title"><i class="fas fa-computer"></i>Especificações Técnicas</h3>
                    <div class="specs-grid">
                        ${Object.entries(product.specs).map(([key, value]) => `
                            <div class="spec-item">
                                <div class="spec-label">${key}:</div>
                                <div class="spec-value">${value}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;

    // Eventos de quantidade
    const minusBtn = modalContent.querySelector('.minus');
    const plusBtn = modalContent.querySelector('.plus');
    const quantityInput = modalContent.querySelector('.quantity-input');
    const addBtn = modalContent.querySelector('.modal-add-to-cart');

    minusBtn.addEventListener('click', () => {
        let value = parseInt(quantityInput.value);
        if (value > 1) {
            quantityInput.value = value - 1;
        }
    });

    plusBtn.addEventListener('click', () => {
        let value = parseInt(quantityInput.value);
        quantityInput.value = value + 1;
    });

    // Adicionar ao carrinho do modal
    addBtn.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        addToCart(product.id, quantity);
        productModal.classList.remove('active');
    });

    productModal.classList.add('active');
}

// Adicionar item ao carrinho
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);

    if (!product) return;

    // Verificar se o produto já está no carrinho
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }

    updateCart();
    showNotification(`${quantity}x ${product.name} adicionado ao carrinho!`);
}

// Atualizar carrinho
function updateCart() {
    // Atualizar contador
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Atualizar itens do carrinho
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = `
                    <div class="empty-cart">
                        <i class="fas fa-shopping-cart"></i>
                        <h3>Seu carrinho está vazio</h3>
                        <p>Adicione produtos para começar</p>
                    </div>
                `;
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                        <div class="cart-item-img">
                            <i class="fas fa-${item.image} fa-3x" style="color: #001E69;"></i>
                        </div>
                        <div class="cart-item-details">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-price">R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</div>
                            <div class="cart-item-quantity">
                                <button class="cart-quantity-btn minus" data-id="${item.id}">-</button>
                                <input type="number" class="cart-quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                                <button class="cart-quantity-btn plus" data-id="${item.id}">+</button>
                                <button class="remove-item" data-id="${item.id}">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    `;

            // Eventos de quantidade
            const minusBtn = cartItem.querySelector('.minus');
            const plusBtn = cartItem.querySelector('.plus');
            const quantityInput = cartItem.querySelector('.cart-quantity-input');
            const removeBtn = cartItem.querySelector('.remove-item');

            minusBtn.addEventListener('click', () => {
                if (item.quantity > 1) {
                    item.quantity--;
                    quantityInput.value = item.quantity;
                    updateCart();
                }
            });

            plusBtn.addEventListener('click', () => {
                item.quantity++;
                quantityInput.value = item.quantity;
                updateCart();
            });

            quantityInput.addEventListener('change', () => {
                const newQuantity = parseInt(quantityInput.value);
                if (newQuantity >= 1) {
                    item.quantity = newQuantity;
                    updateCart();
                }
            });

            removeBtn.addEventListener('click', () => {
                cart = cart.filter(i => i.id !== item.id);
                updateCart();
            });

            cartItems.appendChild(cartItem);
        });
    }

    // Atualizar total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

// Notificação
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                background-color: var(--primary);
                color: white;
                padding: 12px 24px;
                border-radius: 30px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                z-index: 2000;
                animation: fadeInOut 3s ease-in-out;
            `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Selecionar forma de pagamento
paymentOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Remover seleção anterior
        paymentOptions.forEach(opt => opt.classList.remove('selected'));

        // Adicionar seleção atual
        option.classList.add('selected');

        // Atualizar campo oculto
        paymentMethodInput.value = option.dataset.value;

        // Mostrar campo de dinheiro se necessário
        if (option.dataset.value === 'dinheiro') {
            cashField.style.display = 'block';
        } else {
            cashField.style.display = 'none';
        }
    });
});

// Enviar pedido via WhatsApp
paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const customerName = document.getElementById('customer-name').value;
    const customerPhone = document.getElementById('customer-phone').value;
    const customerAddress = document.getElementById('customer-address').value;
    const paymentMethod = paymentMethodInput.value;
    const cashAmount = document.getElementById('cash-amount').value;

    // Montar mensagem para WhatsApp
    let message = `*Pedido da TechShop*%0A%0A`;
    message += `*Cliente:* ${customerName}%0A`;
    message += `*Telefone:* ${customerPhone}%0A`;
    message += `*Endereço:* ${customerAddress}%0A%0A`;
    message += `*Itens do Pedido:*%0A`;

    cart.forEach(item => {
        message += `- ${item.name} (${item.quantity} x R$ ${item.price.toFixed(2)}) = R$ ${(item.quantity * item.price).toFixed(2)}%0A`;
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `%0A*Total: R$ ${total.toFixed(2)}*%0A%0A`;
    message += `*Forma de Pagamento:* ${paymentMethod}%0A`;

    if (paymentMethod === 'dinheiro' && cashAmount) {
        const change = (cashAmount - total).toFixed(2);
        message += `*Valor em Dinheiro:* R$ ${parseFloat(cashAmount).toFixed(2)}%0A`;
        message += `*Troco:* R$ ${change}%0A`;
    }

    // Número do WhatsApp
    const phone = '84996002433';

    // Abrir link do WhatsApp
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');

    // Fechar modal e limpar carrinho
    paymentModal.classList.remove('active');
    cart = [];
    updateCart();

    // Mensagem de sucesso
    showNotification('Pedido enviado com sucesso!');
});

// Event Listeners
closeModal.addEventListener('click', () => {
    productModal.classList.remove('active');
});

cartIcon.addEventListener('click', () => {
    cartContainer.classList.add('active');
});

closeCart.addEventListener('click', () => {
    cartContainer.classList.remove('active');
});

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showNotification('Adicione produtos ao carrinho primeiro!');
        return;
    }
    cartContainer.classList.remove('active');
    paymentModal.classList.add('active');
});

closePaymentModal.addEventListener('click', () => {
    paymentModal.classList.remove('active');
});

// Fechar modal ao clicar fora
productModal.addEventListener('click', (e) => {
    if (e.target === productModal) {
        productModal.classList.remove('active');
    }
});

paymentModal.addEventListener('click', (e) => {
    if (e.target === paymentModal) {
        paymentModal.classList.remove('active');
    }
});

// Filtro de pesquisa
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);
});

// Inicializar
renderProducts(products);
updateCart();

// Adicionar estilo para notificação
const style = document.createElement('style');
style.innerHTML = `
            @keyframes fadeInOut {
                0% { opacity: 0; transform: translate(-50%, 20px); }
                10% { opacity: 1; transform: translate(-50%, 0); }
                90% { opacity: 1; transform: translate(-50%, 0); }
                100% { opacity: 0; transform: translate(-50%, 20px); }
            }
        `;
document.head.appendChild(style);

const hamburger = document.getElementById('hamburger');
const navContainer = document.getElementById('nav-container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navContainer.classList.toggle('active');
});

// Fechar menu ao clicar nos links
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navContainer.classList.remove('active');
    });
});