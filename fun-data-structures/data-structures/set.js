"use strict";

function createSet(size) {
  
    // build your stack object inside this factory function
    function objSet(maxSize = 5){
      this.size = 0;
      this.storage = [];
      this.maxSize = maxSize;
      this.add = add;
      this.del = del;
      this.has = has;
      this.union = union;
      this.intersection = intersection;
    }
  
    return new objSet(size);
  }

  function add(element){
    if(! this.has(element)){
        this.storage.push(element)
        this.size++
    }
  }

  function del(element){
    if(this.has(element)){
      this.storage.splice(this.storage.findIndex(i => i === element), 1);
      this.size--
    }
  }

  function has(element){
    return this.storage.findIndex(i => i === element) > -1;
  }

  function union(setB){
    let setUnion = createSet();
   
    const filteredArray = this.storage.concat(setB.storage);
    for(let i of filteredArray){
      setUnion.add(i)
    }
    return setUnion;
  }

  function intersection(setB){
    let setIntersect = createSet();
    const filteredArray = this.storage.filter(value => setB.storage.includes(value));
    for(let i of filteredArray){
      setIntersect.add(i)
    }
    return setIntersect;
  }

  module.exports = { createSet };