import * as React from "react";
import {Product} from "./definitions";
import ProductCard from "./ProductCard";

export default function Products({products, addToCart}: { products: Product[], addToCart: any }) {
    const productsCards = products.map(product => <>
        <ProductCard product={product}/>
        <button disabled={product.amount === 0} type={"button"} id={product.name}
                onClick={event => addToCart(event)}>Add to cart
        </button>
    </>);

    return (<div className={"products"}>{productsCards}</div>)
}