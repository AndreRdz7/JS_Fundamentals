// storatge controller


// item controller
const ItemCtrl = (function(){
    //item constructor
    const Item = function(id,name,calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // data structure / state
    const data = {
        items: [
            {
                id: 0,
                name: 'Steak',
                calories: 2000
            },
            {
                id: 1,
                name: 'Hamburguer',
                calories: 800
            },
            {
                id: 2,
                name: 'Cookie',
                calories: 200
            }
        ],
        currentItem: null,
        totalCalories: 0
    }

    return {
        logData: function(){
            return data;
        }
    }
})();

// ui controller
const UICtrl = (function(){
    
})();

// app controller
const App = (function(ItemCtrl,UICtrl ){
    return{
        init: function(){

        }
    }
})(ItemCtrl,UICtrl);

//initialize app
App.init();