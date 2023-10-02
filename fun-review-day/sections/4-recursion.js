
const deepEntries = (obj,arrEntries = []) =>  {
  for (const [key, value] of Object.entries(obj)) {
    if(typeof value === 'object'){
        arrEntries.push([key,deepEntries(value)]);
    } else{
        arrEntries.push([key,value])
    }
  }
  return arrEntries;
  }

const deeplyEquals = (a,b) => { 
  if(a === b){ 
      return true;
  }

  if(typeof a !== 'object' && 
     typeof b !== 'object'){ 
   return false;
  }

  for(let key in a){
      if(!deeplyEquals(a[key],b[key])){
        return false;
      }
  }
  return true;
};

const flat = () => { };

module.exports = { deeplyEquals, flat, deepEntries };

