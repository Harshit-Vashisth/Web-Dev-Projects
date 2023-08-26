// all operations of pizza bettwenn model and 
import makeNetworkCall from "./api-cilent";
import {URL} from '../utils/config.js';
async function getPizzas(){
    // api client (object pizza)
    // data map to model 
    // return model
    const data=await makeNetworkCall(URL);

    // data map to model conversion 

}