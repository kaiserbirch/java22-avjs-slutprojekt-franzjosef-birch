import React from "react";
import {Link} from "react-router-dom";

export default function Navbar({itemsInCart}: { itemsInCart: number }) {


    return (
        <>
            <nav>
                <ul className="nav">
                    <li>
                        <Link to={"/products"}>Products</Link>
                    </li>
                    <li>
                        <Link to={"/cart"}>
                            Cart ({itemsInCart})
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )

}