import { Store } from "pullstate";

const CartStore = new Store({
    
    cart: []
});

export default CartStore;

export const addToCart = product => {

    const currentCart = CartStore.getRawState().cart;
    const added = !currentCart.includes(product);

    CartStore.update(s => {

        if (currentCart.includes(product)) {
            
            s.cart = currentCart.filter(current => current !== product);
        } else {
            
            s.cart = [ ...s.cart, product ];
        }
    });

    return added;
}