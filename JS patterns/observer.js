// observer

function EventObserver(){
    this.observers = [];
}

EventObserver.prototype = {
    susbcribe: function(fn){
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    },
    unsubscribe: function(fn){
        //filter out from the list whatever matches the callback on the list. The filter returns a new list and reassigns the list of observers
        this.observers = this.observers.filter(function(item){
            if(item !== fn){
                return item;
            }
        });
        console.log(`You are unsubscribed from ${fn.name}`);
    },
    fire: function(){
        this.observers.forEach(function(item){
            item.call();
        });
    }
}

const click = new EventObserver();

document.querySelector('.sub-ms').addEventListener('click',function(){
    click.susbcribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click',function(){
    click.unsusbcribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click',function(){
    click.susbcribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click',function(){
    click.unsusbcribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click',function(){
    click.fire();
});

//click handler
const getCurMilliseconds = function(){
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurSeconds = function(){
    console.log(`Current Seconds: ${new Date().getSeconds()}`);
}