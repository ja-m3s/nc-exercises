function map(col,func) {
    //only works for arrays...lodash works for objects
 

    if(Array.isArray(col)){
        return col.map(func); 
    }  

    if(typeof col === 'object'){
        let objectMappedArray = [];
        
        for (const key in col) {
            objectMappedArray.push(func(col[key]))
        }
        return objectMappedArray;
    }
  }
  
  module.exports = { map };
  