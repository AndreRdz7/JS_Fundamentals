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
        getItems: function(){
            return data.items;
        },
        logData: function(){
            return data;
        }
    }
})();

// ui controller
const UICtrl = (function(){
    const UISelectors = {
        itemList: '#item-list'
    }

    return{
        populateItemList: function(items){
            let html = '';
            items.forEach(function(item){
                html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                <i class="edit-item fa fa-pencil"></i>
                </a>
            </li>`;
            });

            // insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        }
    }
})();

// app controller
const App = (function(ItemCtrl,UICtrl ){
    
    
    // public methods
    return{
        init: function(){
            // fetch items from data structure
            const items = ItemCtrl.getItems();
            // populate list with items
            UICtrl.populateItemList(items);
        }
    }
})(ItemCtrl,UICtrl);

//initialize app
App.init();