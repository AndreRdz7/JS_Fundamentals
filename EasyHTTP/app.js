const http = new easyHTTP;

//get posts
http.get('https://jsonplaceholder.typicode.com/posts',function(posts){
    console.log(posts);
});
