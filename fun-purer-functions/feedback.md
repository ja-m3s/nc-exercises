# feedback for 14/07/2023


## `pure.js` and `pure.test.js`

## commits

### `added boilerplate for first 5 tasks`

I can see that you have committed what appears to be a initiallayout of your code and testing, however we recommend to only push and commit when you have completed the code/section/test, 
as currently this first commit shows :

```js
describe('raiseSalaries', () => {
      it('returns object', () => {
        expect(typeof raiseSalaries()).toBe('object');
      });
```

This `it` block shows a simple "returns object" without any indication of the further context. Although I appreciate that this may have been just your starting point, 
but please do remember to push and commit complete sections at a time, to allow us to review and provide feedback appropriately.

<br>

### `raiseSalaries complete`

Reviewing your second commit, I can see that you have pushed both `removeLastNumber` and `raiseSalaries`, please just be mindful of pushing one at a time. 

```js
function removeLastNumber(arrayNumbers){
    newArrayNumbers = arrayNumbers.slice(0,arrayNumbers.length-1);
    return newArrayNumbers;
```
Great use of slice method to maintain pure functionality here! 


```js
    describe('removeLastNumber', () => {
      it('returns empty array when passed empty', () => {
        expect(removeLastNumber([])).toEqual([]);
      });
			it('returns empty array when passed array of one value', () => {
        expect(removeLastNumber([1])).toEqual([]);
      });
			it('returns array minus last number', () => {
        expect(removeLastNumber([1,2,3])).toEqual([1,2]);
        expect(removeLastNumber([9,2,4])).toEqual([9,2]);
```

The tests here are fine and testing the correct things, however please keep in mind that for pure function, you will need to test that returned array, 
is not the same as the given argument/array (value vs reference) and also that the given argument/array has not been mutated. You can do this by using `toBe` and/or `not.toBe`.

<br>

```js
function raiseSalaries(arrayEmployees = [] ,increasePercentage = 0){
    let newArrayEmployees = arrayEmployees;
    newArrayEmployees.forEach((element, index) => { 
    newArrayEmployees[index].salary += 
        newArrayEmployees[index].salary * (increasePercentage/100); 
    });

    return newArrayEmployees;
}
```

Good use of array method for iteration and declaration of a new array with good naming.

```js
    describe('raiseSalaries', () => {

			const employees = [{ name: "Alice", salary: 3000 },
			{ name: "Bob", salary: 2000 },
			{ name: "Vel", salary: 4500 }];
	 		const percentage = 10;
	 		const run = raiseSalaries(employees,percentage);

			it('handles missing parameters', () => {
        expect(raiseSalaries([],0)).toEqual([]);
				expect(raiseSalaries([],10)).toEqual([]);
				expect(raiseSalaries([{ name: "Alice", salary: 3300 }])).toEqual([{ name: "Alice", salary: 3300 }]);
      });

			it('returns array', () => {
        expect(Array.isArray(run)).toBe(true);
      });

			it('returns a object with correct properties', () => {				
			 expect(run[0]).toHaveProperty('name');
			 expect(run[0]).toHaveProperty('salary');
			});

			it('returns correct salary', () => {
				const result = [
					{ name: "Alice", salary: 3300 },
					{ name: "Bob", salary: 2200 },
					{ name: "Vel", salary: 4950 },
					];

        expect(run).toEqual(result);
      });
```

You have done well in choosing various tests of the results however as mentioned before you will need to test for mutation and return different than original passed argument. 
Please be mindful of the order of the tests, ideally your initial tests should focus on the the data types before continuing to testing the logic e.g. 

```js
			it('returns array', () => {
        expect(Array.isArray(run)).toBe(true);
      });
```

This test should be further up.

Your function had good variable names, which are precise and clear, however here in your tests, some variables are not too immediately clear, such as `const run = raiseSalaries(employees,percentage)`.

```js
			it('handles missing parameters', () => {
        expect(raiseSalaries([],0)).toEqual([]);
				expect(raiseSalaries([],10)).toEqual([]);
				expect(raiseSalaries([{ name: "Alice", salary: 3300 }])).toEqual([{ name: "Alice", salary: 3300 }]);
      });
```
From the name of the test it appears that you are trying to test the behaviour of the function if it had missing parameters, which in most cases would cause an error, 
but your function code has default values, which would prevent any error from missing parameters. Instead I think you are testing optional parameters and what the behaviour would be if you chose 
not to include either of the optional parameters.

<br>

### `completed updateTasks`

```js
    //input validation
    if (person == null ) {
        throw new Error('Parameter person is undefined') ;
    }
    if (tasks == null ) {
        throw new Error('Parameter tasks is undefined') ;
    }
```

```js
				it('handles missing parameters', () => {
					expect(() => updateTasks(undefined,['empty the bin'])).toThrow('Parameter person is undefined');
					expect(() => updateTasks({ name:"Alice",tasks:['water flowers']},undefined )).toThrow('Parameter tasks is undefined');
				});
```

This is very good work as it shows your understanding of error handling that is beyond the scope of what we have currently taught and shows great knowledge and initiative, well done! However
at this point of the course, we are not expecting or requiring you to be implementing error handling as the code you have implemented is close to testing javascript itself, 
where it currently will handle errors on its own for the current situation.

```js
function updateTasks(person, tasks){

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
```

Again, well done for exploring a more advanced approach using OOP, which I assume is from your previous experience that you are applying here. Your understanding of OOP is great and will definitely help
you on the later sections of the course when this is covered. However at the moment, these tasks may have been overcomplicated when using these approaches, as there are currently more fundamental
logic that can be applied, which we are hopefully trying to get students to develop. Just another reminded that the tests are missing tests for mutation and if returned value is different reference to passed argument.

<br>

### `added testing for checking a new object is returned`

```js
			it('returns new object', () => {
				const testArr = [1,3,5];
				const newArr = removeLastNumber([1,2,3])
        expect(newArr).not.toBe(testArr);
```

Well done here, it seems like you grasped that you were missing the pure function tests and have now included the correct tests to check for new instances being returned! 










