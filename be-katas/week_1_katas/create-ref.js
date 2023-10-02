const createRef = (arrayOfObj, key = "name", value = "phoneNumber") => {
  let collection = {};
  for (obj of arrayOfObj) {
    if (obj.hasOwnProperty(key) && 
        obj.hasOwnProperty(value)) {
           collection = { ...collection, [obj[key]]: obj [value] };      
    }
  }
 
  return collection;
};

module.exports = createRef;
