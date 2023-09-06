
// import { URL } from '../utils/config.js';
 async function makeNetworkCall(URL){
    try{
        const response=await fetch(URL);
        const data=await response.json();
        return data;
    }
    
    catch(err){
        console.log("Problem is ",err);
        throw err;
    }
    // const promise=fetch(URL);
    // console.log("promise",promise);
    // promise.then(response=>{
    //     console.log('response is ',response);
    //     const promise2=response.json();
    //     promise2.then(data=>console.log("data",data)).catch(e=>console.log("JSON PARSE ERROR"))
    //     // json is the one who transfer between network 

    // }).catch(err=>{
    //     console.log('error is ',err);
    // })
}
 export default makeNetworkCall;