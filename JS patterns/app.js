//basic structure
/*
(function(){
    //declare private variabless
    
    return {
        //declare public variables
    }
})();
*/

// Standard Module Pattern
const UICtrl = (function() {
    let _text = 'Hello World';
    const changeText = function(){
        const element = document.querySelector('h1');
        element.textContent = _text;
    }

    return {
        callChangeText: function(){
            changeText();
            console.log(_text);
        }
    }

})();

// we cannot call changeText cuz its private, only callChangeText
// similar like private and public funcitions
UICtrl.callChangeText();
// we cannot access variables outside the return, we get undefined
console.log(UICtrl.text);


// Revealing Module Pattern
// we map object literals

const ItemCtrl = (function(){
    let _data = [];
    function add(item){
        _data.push(item);
        console.log('item added');
    }

    function get(id){
        return _data.find(item => {
            return item.id === id;
        });
    }

    return{
        add: add,
        get: get
    }
})();

ItemCtrl.add({id: 1, name: 'John'});
console.log(ItemCtrl.get(1));