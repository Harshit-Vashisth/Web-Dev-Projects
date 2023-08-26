// // this the middle of api call and our applicatins

//     // now it will be easy for us to fetch this particular data 
//     // javascript is object based not object oriented 

import { getPizzas } from "../services/pizza-operations.js";

    
// }
async function printPizzas()
{
    getPizzas();
    console.allPizzas=await getPizzas();
    console.log('All Pizza',allPizzas);
}
printPizzas();
