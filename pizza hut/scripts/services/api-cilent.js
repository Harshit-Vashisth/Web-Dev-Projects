// network talk 
// http or https 
// async call , Promise
// a->then
// or 
// b->catch
makeNetworkCall("https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json");
async function makeNetworkCall(URL){
//     const promise=fetch(URL);
//     // predefine method used in java 6 which is a wrapper method of xml hhtp request 
//     promise.then((response)=>{
//        const promise2= response.json();
//         // json is not in the form of object 
//         // time lgta h kyuki process karga vo bhi 
//         promise2.then(data=>{

//         }).catch(err=>{
// //invlaid json
//         })
//     }).catch((err)=>{
//         //url worng h calling ni hori h etc 
//     });
try{
    const response = await fetch(URL);
    const data = await response.json();
    console.log("data is "+data);
    return data;
    }
    catch(err){
        console.log("error is ", arr);
        throw err;
    }
    // await is so smart that it say that which func u have call await it handle it smothly 
    // 
}