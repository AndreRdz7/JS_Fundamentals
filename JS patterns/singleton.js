// Singleton pattern
// only return one instance at a time

// log in users, global point of access

const Singleton = (function(){
    let instance;

    function createInstance(){
        const object = new Object({name: 'Andre'});
        return object;
    }

    return {
        getInstance: function(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();

// can only be instanced once and only once
const instanceA = Singleton.getInstance();
console.log(instanceA);
// proof
const instanceB = Singleton.getInstance();
console.log(instanceA === instanceB);
// its the very same instance :)