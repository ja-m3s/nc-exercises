// Whole-script strict mode syntax
"use strict";

/**
 * removeLastNumber
 * 
 * This function should take an array of numbers as its only argument.
 * This function should return a new array of numbers with the last one removed.
 * removeLastNumber([1, 2, 3, 4]);
 * should return [1, 2, 3]
 */
function removeLastNumber(arrayNumbers){
    const newArrayNumbers = arrayNumbers.slice(0,arrayNumbers.length-1);
    return newArrayNumbers;
}

/**
 * raiseSalaries
 * 
 * This function should take as its arguments:
 *  An array representing a list of employees,
 *  A number representing a percentage increase.
 * Each employee in the array will be represented as an object with a name and a salary property.
 * It should return a new array of employees with their salary now increased by the given percentage increase. 
 * The new salaries should be rounded up to the nearest integer.
 * None of the original employee objects should be mutated. 
 * raiseSalaries(
 * [
 * { name: "Alice", salary: 3000 },
 * { name: "Bob", salary: 2000 },
 * { name: "Vel", salary: 4500 },
 * ],10
 * );
 * should return
 * [
 * { name: 'Alice', salary: 3300 },
 * { name: 'Bob', salary: 2200 }, 
 * { name: 'Vel', salary: 4950 }
 * ]
 * */
function raiseSalaries(arrayEmployees = [] ,increasePercentage = 0){
    
    function calcNewSal(employee) {
        employee.salary += (employee.salary * (increasePercentage/100));
        return employee;
      }
    const newArrayEmployees = arrayEmployees.map(calcNewSal) 

    return newArrayEmployees;
}

/**
 * updateTasks
 *  
 * This function should take as its arguments:
 * A person object (with name and tasks properties).
 * One or more new tasks.
 * 
 * The function should return a new person object with a new tasks property. 
 * The tasks property from the input object should not be mutated.
 * */
function updateTasks(person, tasks){
    
    //input validation
    if (person == null ) {
        throw new Error('Parameter person is undefined') ;
    }
    if (tasks == null ) {
        throw new Error('Parameter tasks is undefined') ;
    }

    //constructor for person object
    function objPerson(name,tasks){
        this.name = name
        this.tasks = tasks
    }

    return new objPerson(person.name,tasks);
}

/**
 * cloneObject
 * 
 * This function should take as its arguments:
 * A target object (values are only primitives).
 * A source object (values are only primitives).
 * The function should return the target object with 
 * all the key-value pairs from the source object
 * copied over. 
 * This function should mutate the target object.
 * 
 * This function has identical functionality to Object.assign().
 * 
 * Note: make sure you are testing to check the original object 
 * has been mutated!
 * 
 */
function cloneObject(target,source){
    for (const key in source) {
      target[key] = source[key]
    }
    return target;
}

/**
 * calculateConfectioneryCosts
 * 
 * Write a function that takes an array of pop star objects with 
 * information about the amount they have spent so far this year
 *  on confectionery at the cinema, and 
 * how much they have spent on today's visit. 
 * It should return a new array of new 
 * objects with a property for the pop star's name and 
 * the yearlyCumulativeSpend 
 * property updated to include today's costs.
 */
function calculateConfectioneryCosts(celebs){
    let newArrCelebs = []

    for (const celeb of celebs) {
        console.log('working on: ',celeb);

        //work out new cum spend
        let yCS = Number(celeb.yearlyCumulativeSpend.substring(1));
        const purchaseToday = celeb.purchaseToday;

        yCS += (Number(purchaseToday.costPerItem.substring(1)) * Number(purchaseToday.amountBought))
        yCS = '£'+yCS;
        //push to new array
        newArrCelebs.push({ name: celeb.name, yearlyCumulativeSpend: yCS})
    }
    
    return newArrCelebs;
}

module.exports = {
    removeLastNumber,
    raiseSalaries,
    updateTasks,
    cloneObject,
    calculateConfectioneryCosts
  };
  