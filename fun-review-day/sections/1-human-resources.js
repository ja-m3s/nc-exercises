"use strict";

function removeAgents(employees) {
    let retainedEmployees = [];
    
    employees.forEach(element => { 
            if(element.profession !== "mole"){
                retainedEmployees.push(element)
            }
        }     
    )
    return retainedEmployees;
}

function makeNameTags(names) {
    let nameTags = []
    names.forEach(element => 
        nameTags.push(
            element.title+' '+
            element.forename+' '+
            element.surname+', '+
            element.company)        
    )
    return nameTags
}

function createPoll(data) { 
   let objPoll = {};

   const uniqueData = [...new Set(data)]

   for(let entity of uniqueData){
      let count = 0;
      data.forEach(element => {
        if(entity === element){ count++; } 
      }
      )
      objPoll[entity] = count
    }       
    return objPoll;

}

module.exports = { removeAgents, makeNameTags, createPoll };

