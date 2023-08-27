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

function addToCart(){
    console.log("add to cart call",this);
    const cuurentButton=this;
    const pizzaid=currentButton.getAttribute('')
    console.log('Pizza-id',pizzaid);
}
function createCard(pizza){
    /*
    <div class="col-4">

                </div>
    */
   const colDiv = document.createElement('div');
   colDiv.className = 'col-4';
    const cardDiv = document.createElement("div");
    cardDiv.className = 'card';
    cardDiv.style = {width:'18rem'};
    const img = document.createElement('img');
    img.src = pizza.url;
    img.className = 'card-img-top';
    cardDiv.appendChild(img);
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.innerText = pizza.name;
    cardBody.appendChild(h5);
    cardDiv.appendChild(cardBody);
    const pTag = document.createElement('p');
    pTag.className = 'card-text';
    pTag.innerText = pizza.desc;
    cardBody.appendChild(pTag);
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    //custom attribute 
    button.setAttribute('pizza-id',pizza.id);
    button.innerText = 'Add to Cart';
    button.addEventListener('click',addToCart());
    cardBody.appendChild(button);
    colDiv.appendChild(cardDiv);
    return colDiv;

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