import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import {Product} from "./components/definitions";
import Products from "./components/Products";
import Cart from "./components/Cart";
import {getAllProducts, setAllProducts} from "./lib/productRepository";
import {Route, Routes, useNavigate} from "react-router-dom";

function App() {
    const [inventory, setInventory] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([])
    const itemsInCart = cart.reduce((sum, product) => sum + product.amount, 0);
    const navigate = useNavigate();

    // Initial get of products
    useEffect(() => {
        (async () => {
            setInventory(await getAllProducts() ?? []);
        })()
    }, [])

    function addToCart(e: React.ChangeEvent) {
        // get item from inventory
        const [item] = inventory.filter(product => product.name === e.target.id)

        // return if out of stock
        if (item.amount <= 0) {
            return;
        }
        // check if item already is in cart
        if (cart.find(item => item.name === e.target.id)) {
            setCart(
                // add one to cart
                cart.map(product => {
                    if (product.name === e.target.id) {
                        return {...product, amount: product.amount + 1}
                    } else return product
                }))
        } else {
            // add the item to the cart
            setCart([...cart, {...item, amount: 1}])
        }
        setInventory(
            // subtract one from inventory
            inventory.map(product => {
                if (product.name === e.target.id) {
                    return {...product, amount: product.amount - 1}
                } else return product
            }))
    }

    async function emptyCart() {
        navigate("/products")
        setCart([])
        setInventory(await getAllProducts());
    }

    async function buy() {
        setCart([])
        await setAllProducts(inventory);
        alert("Purchase complete")
    }

    return (
        <div className="App">
            <Header></Header>
            <section>
                <Navbar itemsInCart={itemsInCart}></Navbar>
                <Routes>
                    <Route path={"/cart"} element={<Cart cart={cart} buy={buy} emptyCart={emptyCart}/>}/>
                    <Route path={"/products"} element={<Products products={inventory} addToCart={addToCart}/>}/>
                </Routes>
            </section>
        </div>
    );
}

export default App;