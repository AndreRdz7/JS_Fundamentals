const http = new easyHTTP;

//get posts
// get 1 post -> posts/1 and use singular con every other posts
/*
code works fine
http.get('https://jsonplaceholder.typicode.com/posts',function(err,posts){
    if(err){
        console.log(err);
    } else {
        console.log(posts);
    }

});
*/
//post request
//create data
/* code works
const data = {
    title: 'Custom post',
    body: 'hi'
};

http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,post){
    if(err){
        console.log(err);
    } else {
        console.log(postS);
    }
});
*/

//update post (put)
/* code works
http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,post){
    if(err){
        console.log(err);
    } else {
        console.log(postS);
    }
});
*/

http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,response){
    if(err){
        console.log(err);
    } else {
        console.log(response);
    }

});