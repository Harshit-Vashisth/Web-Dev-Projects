import Product from "../models/pizza-model.js";
import makeNetworkCall from "./api-client.js";
export const productOperation={
    products:[],
    search(pizzaId){
        const product=this.products.find(currentPizza=>currentPizza.id==pizzaId);
        product.isAddedInCart=true;
        console.log('Array', this.products);
    },
    getProductsInCart(){
        const productInBasket=this.products.filter(product=>product.isAddedInCart);
        return productInBasket;
    },
    async loadProducts(){
        const pizzas=await makeNetworkCall();
        const pizzaArray=pizzas['Vegetarian'];
        pizzaArray.map(pizza=>{
            // map ek ek pizza pr jaiga inshort huamra loop run hoga 
            const currentPizza=new Product(pizza.id,pizza.name,pizza.menu_description,pizza.price,pizza.assets.product_details_page[0].url);
            return currentPizza;
        })
        console.log(pizzaArray);
        this.products=this.loadProducts;
        return pizzaArray;
    },
    sortProducts(){

    },
    
}
export default productOperation;