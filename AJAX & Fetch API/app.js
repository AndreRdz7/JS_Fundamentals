//event lister
document.getElementById('button').addEventListener('click',loadData);

function loadData(){
    //create an xhr obj
    const xhr = new XMLHttpRequest();
    //open
    xhr.open('GET','data.txt',true);

    //optional - used for spinners/loader
    xhr.onprogress = function(){
        console.log('readystate',xhr.readyState);
    }

    xhr.onload = function(){
        //check first
        // 200 is ok, 403 is forbidden, 404 is not found
        if(this.status === 200){
            console.log(this.responseText);
            document.getElementById('output').innerHTML = `
            <h1>${this.responseText}</h1>
            `
        }
    }
    /* this is the previous version of the onload
        xhr.onreadystatechange = function(){
            if(this.status === 200 && this.readyState === 4){
                console.log(this.responseText);
            }
        }
    */
    xhr.onerror = function(){
       console.log('request error');
    }
   
    xhr.send();
    // readyState values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

}