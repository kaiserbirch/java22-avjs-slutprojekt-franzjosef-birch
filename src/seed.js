import {getAllProducts, setAllProducts} from "./lib/productRepository.js";


const seedData = [
    {
        name: "Chocolate Cupcake",
        amount: 5,
        price: 15,
        img: "https://sallysbakingaddiction.com/wp-content/uploads/2014/06/best-chocolate-cupcakes.jpg"
    },
    {
        name: "Blueberry Cupcake",
        amount: 8,
        price: 14.99,
        img: "http://images.media-allrecipes.com/userphotos/960x960/4482229.jpg"
    },
    {
        name: "Nothing Cupcake",
        amount: 15,
        price: 27,
        img: "https://i0.wp.com/gotoheavennow.com/wp-content/uploads/2019/12/hands-1922053_1280.png"
    },
    {
        name: "Pupcake",
        amount: 6,
        price: 31,
        img: "https://thatonedogmom.com/wp-content/uploads/2020/02/Peanut-Butter-Pupcake-recipe-4-1024x1536.png"
    },
    {
        name: "Raspberry Cupcake",
        amount: 1,
        price: 25,
        img: "https://i0.wp.com/www.livewellbakeoften.com/wp-content/uploads/2016/07/Lemon-Cupcakes-with-Raspberry-Buttercream-Square-1.jpg"
    },
    {
        name: "Strawberry Cupcake",
        amount: 3,
        price: 28,
        img: "https://cakewhiz.com/wp-content/uploads/2019/01/Homemade-Strawberry-Cupcakes-With-Strawberry-Frosting-700x1050.jpg"
    }
]

async function seed() {
    await setAllProducts(seedData);
    const test = await getAllProducts();
    console.log(test)
}

seed();