const http = new EasyHTTP;

//get users 
//no promise
/*
http.get('https://jsonplaceholder.typicode.com/users');
*/
//with promise

/*
http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err));
*/

//user data
const data = {
    name: 'John',
    username: 'SuperJ',
    email: 'hey@meh.com'
}
//create post

http.post('https://jsonplaceholder.typicode.com/users', data)
.then(data => console.log(data))
.catch(err => console.log(err));


//update post
http.put('https://jsonplaceholder.typicode.com/users/1', data)
.then(data => console.log(data))
.catch(err => console.log(err));

//delete post
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));


http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err));