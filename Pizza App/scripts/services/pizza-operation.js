import Product from "../models/pizza-model.js";
import makeNetworkCall from "./api-client.js";
export const productOperation={
    async loadProducts(){
        const pizzas=await makeNetworkCall();
        const pizzaArray=pizzas['Vegetarian'];
        pizzaArray.map(pizza=>{
            // map ek ek pizza pr jaiga inshort huamra loop run hoga 
            const currentPizza=new Product(pizza.id,pizza.name,pizza.menu_description,pizza.price,pizza.assets.product_details_page[0].url);
            return currentPizza;
        })
        console.log(pizzaArray);
        return pizzaArray;
    },
    sortProducts(){

    },
    searchProducts(){

    }
}
export default productOperation;