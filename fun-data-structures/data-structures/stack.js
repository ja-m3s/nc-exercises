"use strict";

/**
 * createStack factory function:
 * @property quantity (default 0). Quantity represents the number of items currently in the stack storage.
 * @property storage (default {}). Holds objects on the stack.
 * @param maxSize (default 5). Can either be passed as an argument when creating the stack, or when no argument is passed it uses a default value
 */
function createStack(size) {
  
  // build your stack object inside this factory function
  function objStack(size = 5){
    this.quantity = 0;
    this.storage = {};
    this.maxSize = size;
    this.push = push;
    this.pop = pop;
    this.isEmpty = isEmpty;
    this.isFull = isFull;
    this.peek = peek;
  }

  return new objStack(size);
}

/** A push method, which adds items to the stack storage, provided the stack is not already full. */
function push(item){
  if(! this.isFull()) {
    this.storage[++this.quantity] = item;
  }
}

/** A pop method, which can remove items from the stack storage, provided the stack is not empty. It will also return the item removed from the stack. */
function pop(item){
  if(! this.isEmpty()) {
    const popped = this.storage[this.quantity];
    delete this.storage[this.quantity--];
    return popped;
  }
}

/** An isEmpty method, which returns a boolean. Should return true when the stack storage is empty and the current quantity is 0. */
function isEmpty(){
  return this.quantity === 0 ? true : false;
}

/** An isFull method, which returns a boolean. Should return true when the storage is full, i.e. when the current quantity equals the maxSize. */
function isFull(){
  return this.quantity === this.maxSize ? true : false;
}

/** A peek method that will show the item at the top of the stack storage. */
function peek(){
  return this.storage[this.quantity];
}

module.exports = { createStack };