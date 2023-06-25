let productViews = new WeakMap();
let cartItems = new WeakSet();

const incrementProductViews = (productId) => {
    try {

        let product = { id: productId }
  

        let count = productViews.get(product) || 0
        productViews.set(product, count + 1)

        console.log(`Product Id ${productId} is viewed for ${count + 1} time/s`)
        return { message: `Product Id ${productId} is viewed for ${count + 1} time/s` }

    } catch (error) {
        return { error }
    }

}

const addToCart = (productId) => {

    try {
        let product = { id: productId }

        if (cartItems.has(product)) {
            console.log( "Product already in cart")
            return { message: "Product already in cart" }
        }

        cartItems.add(product)
        console.log( "Product added to cart")

        return { message: "Product added to cart" }

    } catch (error) {
        return { error }
    }

}


incrementProductViews(123); // Product ID 123 is viewed for the first time 
incrementProductViews(123); // Product ID 123 is viewed for the second time

addToCart(123); // "Product added to cart" 
addToCart(123); // "Product already in cart"