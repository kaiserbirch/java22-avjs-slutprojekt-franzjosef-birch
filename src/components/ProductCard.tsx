import * as React from "react";
import {Product} from "./definitions";

export default function ProductCard({product}: { product: Product }) {

    return (
        <>
            <p>
                <img height={100} width={100} src={product.img} alt={product.name}/>
                <br/>
                {product.name}<br/>
                Amount: {product.amount}<br/>
                Cost: {product.price}</p>
        </>

    )

}