import URL from '../utils/config.js'
console.log("hello");
function makeNetworkCall(){
    
    const promise=fetch(URL);
    console.log("promise is ",promise)
    promise.then(function(response){
        console.log("Response" , response);
    }).catch(function(err){
        console.log("Error", err);
    });
}