import { createStore, applyMiddleware, compose } from "https://cdn.jsdelivr.net/npm/redux@4.2.1/es/redux.mjs";
import LoggerMiddleWare from "./LoggerMiddleware.js";

const initialState = {
    title: "",
    show: false
}


function appReducer(prevState = initialState, action) {
    switch (action.type) {
        case "ADD":
            return {
                show: false,
                title: action.payload
            }
        case "GET":
            return {
                ...prevState,
                show: !prevState.show
            }
        case "UPDATE":
            return {
                show: false,
                title: action.payload
            }
        case "DELETE":
            return {
                show: false,
                title: ""
            }
        default:
            return prevState
    }
}



// Compose middleware with Redux DevTools (if available)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    appReducer,
    composeEnhancers(applyMiddleware(LoggerMiddleWare))
);

// Get initial state
const state = store.getState();

//ActionCreater

//ADD
function Add(title) {
    return {
        type: "ADD",
        payload: title
    }
}
//GET
function Get() {
    return {
        type: "GET"
    }
}
//UPDATE
function Update(title) {
    return {
        type: "UPDATE",
        payload: title
    }
}
//GET
function Delete() {
    return {
        type: "DELETE"
    }
}

let title = document.getElementById("title")
let input = document.getElementById("input")
let addbtn = document.getElementById("add")
let getbtn = document.getElementById("get")
let updatebtn = document.getElementById("update")
let deletebtn = document.getElementById("delete")

// Subscribe to store changes (update UI whenever state changes)
store.subscribe(() => {
    title.innerText = store.getState().title
    if (store.getState().show) {
        input.value = store.getState().title
    } else {
        input.value = ""
    }
});






addbtn.addEventListener('click', () => {
    store.dispatch(Add(input.value))
})
getbtn.addEventListener('click', () => {
    store.dispatch(Get())
})
updatebtn.addEventListener('click', () => {
    store.dispatch(Update(input.value))
})
deletebtn.addEventListener('click', () => {
    store.dispatch(Delete())
})