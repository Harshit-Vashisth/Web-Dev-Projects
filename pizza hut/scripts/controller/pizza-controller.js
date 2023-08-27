// // this the middle of api call and our applicatins

//     // now it will be easy for us to fetch this particular data 
//     // javascript is object based not object oriented 

import { getPizzas } from "../services/pizza-operations.js";

    
// }
async function printPizzas()
{
    const allPizzas=await getPizzas();
    const div=document.getElementById('pizza-output');
    console.log('All Pizza',allPizzas);
    for(var pizza of allPizzas){
        const card=createCard(pizza);
        div.appendChild(card);
    }
}

printPizzas();

function createCard(pizza){
    // yaha humare card banege aur div me ek ek karke add
    
   /*
   <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
   */
}