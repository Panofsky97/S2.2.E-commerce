// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20 
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

const total = 0;

// Exercise 1
function buy(id){
    // 1. Loop for to the array products to get the item to add to cart
    const product = products.find(product => product.id === id);

    // 2. Add found product to the cart array

    const itemInCart = cart.find((item) => item.id === id);

    if(itemInCart){
        itemInCart.quantity++
        console.log("Articulo sumado")
        
    }else{
        cart.push({...product, quantity: 1});
        console.log("Producto añadido")
    }

    applyPromotionsCart(cart);
    printCart();
  
}

// Exercise 2
const cleanCart = () => {
    cart.length = 0; // ✅ Vacía el array sin romper la referencia
    console.log("Carrito limpiado");

    localStorage.removeItem("cart");

    document.getElementById("cart_list").innerHTML = "";
    document.getElementById("total_price").textContent = "0";
    document.getElementById("count_product").textContent = "0";
    document.getElementById("count_product").textContent = "0";
}


// Exercise 3

    // Calculate total price of the cart using the "cartList" array

    function calculateTotalPrice(cart) {
        let total = 0;

         applyPromotionsCart(cart);

         for (let i = 0; i < cart.length; i++) {
           const item = cart[i];
           total += item.price * item.quantity;
        }
        console.log(`Total: ${total}`);
    }

// Exercise 4
const applyPromotionsCart = (cart) =>  {
    // Apply promotions to each item in the array "cart"

    for (let i = 0; i < cart.length; i++) {
        const item = cart [i];
        if (item.id === 1 && item.quantity >= 3) {
            item.discountedPrice = item.price * (1 - item.offer.percent / 100);
            item.subtotalWithDiscount = item.discountedPrice * item.quantity;
            console.log(`Promoción añadida ${item.name}: ${item.subtotalWithDiscount} off`);
        }else if (item.type === 'grocery' && item.quantity >= 10) {
            item.discountedPrice = item.price * (1 - item.offer.percent / 100);
            item.subtotalWithDiscount = item.discountedPrice * item.quantity
            console.log(`Promoción añadida ${item.name}: ${item.subtotalWithDiscount} off`);
        }else{
            console.log(`No promotion applied for ${item.name}`);
        }
    
    }
}

// Exercise 5
const printCart = () => {
    // Fill the shopping cart modal manipulating the shopping cart dom
    const cartTable = document.getElementById("cart_list");
    cartTable.innerHTML = ""; // Clear previous content

    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];

        const tr = document.createElement("tr");

       tr.innerHTML = `
            <td>${item.name}</td> 
            <td>${item.price.toFixed(2)}</td>
            <td>
                ${item.quantity}
                <button onclick="removeFromCart(${item.id})" class="btn btn-sm btn-danger ms-2">-</button>
            </td>
            <td>${(item.price * item.quantity).toFixed(2)}</td>
        `;

        cartTable.appendChild(tr);
        
    }

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const countProductElement = document.getElementById("count_product");
    if (countProductElement) {

        countProductElement.textContent = totalItems;

        } else {
           console.warn("Elemento count_product no encontrado");
        }
}

// ** Nivell II **

// Exercise 7
const removeFromCart = (id) => {

    const itemInCart = cart.find(item => item.id === id);

    if (itemInCart) {
        if (itemInCart.quantity > 1) {
            itemInCart.quantity--;
        } else {
            const index = cart.findIndex(item => item.id === id);
            if (index !== -1) {
                cart.splice(index, 1);
            }
        }
    }

    applyPromotionsCart(cart);
    printCart();
}

const open_modal = () =>  {
    printCart();
}

window.buy = buy;
window.cleanCart = cleanCart;
window.open_modal = open_modal;
window.removeFromCart = removeFromCart;
