//  1) Create  a store object
// a store is the javascript object that keep track of eventName and methods in it.
const store = {}
// 2) Create subscribe method
// subscribe is the method that has two arguments eventname and other is the callback function
// whenever the subscriber method is triggered it checks whether the eventName in the store exists or not
// if eventName exists it updates the callback at the even location in the store object.
// if eventName doesn't exists it add the evename and callback to the store

const subscribe = (eventName, callback) => {
    if (!store[eventName]) {
        store[eventName] = new Set();
    }
    store[eventName].add(callback)
}


// 3) Create a publish method.
// publish is the object that has two arguments that are eventName and the data.
// whenever the publish method is triggered it checks whether the eventName in the store exists or not
// if eventName exists it pull the callback stored in store object based on the eventName
// if eventName doesn't exists it doesn't do anything.c/barChildComponent

const publish = (eventName, payload) => {
    if (store[eventName]) {
        store[eventName].forEach(callback => {
            try {
                callback(payload)
            } catch {
                console.log(Error)
            }
        })
    }
}


// 4)Creat unsubscribe method

const unsubscribe = (eventName, callback2) => {
    if (store[eventName]) {
        store[eventName].delete(callback2);
    }
}


export default {
    subscribe,
    publish,
    unsubscribe
}