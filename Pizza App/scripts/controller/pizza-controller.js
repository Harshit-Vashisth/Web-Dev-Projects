import productOperation from "../services/pizza-operation.js";

async function loadPizza(){
    const pizza=await productOperation.loadProducts();
    console.log("PIZAA AR",pizza);
}
loadPizza();