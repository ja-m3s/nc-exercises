
const ageDog = (dog, num) => {
    
    if(dog.hasOwnProperty("name") &&
    dog.hasOwnProperty("age") &&
    typeof dog.age === "number" &&
    typeof num === "number" &&
    num > 0)
    {
        return { ...dog, age: dog.age + num } 
    }
    return "Invalid Input";
    
};

module.exports = ageDog;
