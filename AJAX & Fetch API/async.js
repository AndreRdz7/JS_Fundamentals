//async and await
//async returns a promise

/*
not the best scenario

async function myFunc(){
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => resolve('Hello'),1000);
    });
    const error = false;
    if(!error){
        const res = await promise; //wait until promise is resolved
        return res;
    } else {
        await Promise.reject(new Error('Something went wrong'));
    }
}

myFunc()
    .then(res => console.log(res))
    .catch(err => console.log(err));
*/

//using fetch
async function getUsers(){
    //await response of fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //proceed once its resolved
    const data = await response.json();
    //only proceed once second promise is resolved
    return data;
}

getUsers()
    .then(users => console.log(users));