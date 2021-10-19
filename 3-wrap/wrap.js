var locked = [];
function wrap(execute) {
    if(locked.includes(execute.toString())){
        return null;
    }
    var output;
    try{
       output = execute();
    }
    catch(ex){
        locked.push(execute.toString())
        return null
    }
    
    return output;
}
module.exports = wrap;
