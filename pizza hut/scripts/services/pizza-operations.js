// all operations of pizza bettwenn model and 
import {makeNetworkCall} from '../services/api-cilent.js'
import {URL} from '../utils/config.js';
import Pizza from '../models/pizza-model.js';
export async function getPizzas(){
    // api client (object pizza)
    // data map to model 
    // return model
    const data=await makeNetworkCall(URL);
    // data map to model conversion 
    // return modeld
    const pizzaJSON=data['Vegetarian'];
    const pizzas = pizzaJSON.map(singlePizza =>{
        const pizzaObject = new Pizza(singlePizza.id, 
            singlePizza.name, singlePizza.price
            , singlePizza.assets
            .product_details_page[0].url,
             singlePizza.menu_description);
             return pizzaObject;
    })
    return pizzas;
}