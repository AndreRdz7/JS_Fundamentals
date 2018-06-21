document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click',getJSON);
document.getElementById('button3').addEventListener('click',getExternal);


//local .txt data
function getText(){
    fetch('test.txt').then(function(res){
        return res.text();
    }).then(function(data){
        console.log(data);
        document.getElementById('output').innerHTML = data;
    }).catch(function(err){
        console.log(err);
    });
}

//local .json data
function getJSON(){
    fetch('posts.json').then(function(res){
        return res.json();
    }).then(function(data){
        console.log(data);
        let output = '';
        data.forEach(function(post){
            output += `
            <li>${post.title}: ${post.body}</li>
            `
        });
        document.getElementById('output').innerHTML = output;
    }).catch(function(err){
        console.log(err);
    });
}

//external API
function getExternal(){
    fetch('https://api.github.com/users').then(function(res){
        return res.json();
    }).then(function(data){
        console.log(data);
        let output = '';
        data.forEach(function(user){
            output += `
            <li>${user.login}: ${user.url}</li>
            `
        });
        document.getElementById('output').innerHTML = output;
    }).catch(function(err){
        console.log(err);
    });
}