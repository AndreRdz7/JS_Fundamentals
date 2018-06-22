/**
 * @author  Andre Rodriguez
 * @license MIT
 */

class EasyHTTP{
    //get request 
    //with async and awaits
    async get(url){
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }
    //post request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    
        const resData = await response.json();
        return resData;
       
    }
    //put
    async put(url,data){
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }
    //delete
    async delete(url){
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        const resData = await 'Resource deleted';
        return resData;            
    }
}