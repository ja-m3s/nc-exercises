"use strict";

/**
 * createQueue factory function:
 * @property quantity (default 0). Quantity represents the number of items currently in the stack storage.
 * @property storage (default {}). Holds objects on the stack.
 * @param maxSize (default 5). Can either be passed as an argument when creating the stack, or when no argument is passed it uses a default value
 */
function createQueue(size) {
  
  // build your stack object inside this factory function
  function objQueue(size = 5){
    this.front = 0;
    this.back = 0;
    this.storage = {};
    this.maxSize = size;
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.isEmpty = isEmpty;
    this.isFull = isFull;
    this.peek = peek;
  }

  return new objQueue(size);
}

/*An enQueue method that adds items to the back of the queue. Items can only be added if the queue isn't full.*/
function enqueue(item){
    if(this.isEmpty()){this.front++}
    
    if(! this.isFull()) {
    this.storage[++this.back] = item;
    
  }

  
  
}

/** A dequeue method, which can remove items from the stack storage, provided the stack is not empty. It will also return the item removed from the stack. */
function dequeue(){
  if(! this.isEmpty()) {
    const dequeued = this.storage[this.front];
    delete this.storage[this.front++];
    return dequeued;
  }
}

/** An isEmpty method, which returns a boolean. Should return true when the stack storage is empty and the current quantity is 0. */
function isEmpty(){
  return (this.front === 0 && this.back === 0) ? true : false;
}

/** An isFull method, which returns a boolean. Should return true when the storage is full, i.e. when the current quantity equals the maxSize. */
function isFull(){
  return this.back === this.maxSize ? true : false;
}

/** A peek method that will show the item at the top of the stack storage. */
function peek(){
  return this.storage[this.front];
}

module.exports = { createQueue };