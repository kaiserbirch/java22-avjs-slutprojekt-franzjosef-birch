import * as React from "react";
import {Product} from "./definitions";
import ProductCard from "./ProductCard";

export default function Cart({cart, buy, emptyCart}: { cart: Product[], buy: any, emptyCart: any }) {

    const productsCards = cart.map(product => <ProductCard product={product}/>);
    const totalPrice = cart.reduce((sum, product) => sum + (product.price * product.amount), 0)

    return (<>
        <button type={"button"} onClick={event => buy()}>Confirm purchase</button>
        <button type={"button"} onClick={event => emptyCart()}>Empty cart</button>
        {productsCards}
        <p>Total Price: {totalPrice}</p>


    </>)
}
