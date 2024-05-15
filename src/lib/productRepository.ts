import {Product} from "../components/definitions";

const url = "https://rockpaperscissor-30d3e-default-rtdb.europe-west1.firebasedatabase.app/products"

export async function getAllProducts(): Promise<Product[]> {
    const products = await fetch(url + ".json").then(response => response.json()).catch(e => console.error(e));
    return await products;
}

export async function setAllProducts(products: Product[]) {
    fetch(url + ".json", {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(products)
    }).catch(e => console.error(e));
}
