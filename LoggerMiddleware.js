
//CUSTOM LOGGER MIDDLEWARE
function LoggerMiddleWare({dispatch , getState}) {
    return (next)=>{
        return (action)=>{
            console.log("Prev State : ",getState())
            console.log("Action : ",action)
            next(action)
            console.log("Next State : ",getState())
            console.log("----------------------------")
        }
    }
}

export default LoggerMiddleWare