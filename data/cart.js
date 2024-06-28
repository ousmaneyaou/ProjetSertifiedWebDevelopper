export let cart = JSON.parse(localStorage.getItem('cart'));

//on donne une valeur par defaut au panier pour eviter qu'il soit null
if(!cart){
    cart = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
    },
    {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
    }
    ];
}


// Empecher les produits de revenir apres rafraichissement
function seveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Fonction pour ajouter un produit au panier
export function addToCart(productId) {
    let foundItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            foundItem = cartItem;
        }
    });

    if (foundItem) {
        foundItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        });
    }
    seveToStorage();
}

// Fonction pour supprimer un produit au panier
export function removeFromCart(productId) {
    const newCart = [];  //etap1 creation d'un nouveau tableau

    cart.forEach((cartItem) => {  //etap2 onparcour le tableau
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    seveToStorage();
}

