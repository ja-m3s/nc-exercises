const {
  removeLastNumber,
  raiseSalaries,
  updateTasks,
  cloneObject,
  calculateConfectioneryCosts
} = require('../pure.js');

describe('Purer Functions', () => {
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
      });
			it('returns new object', () => {
				const testArr = [1,3,5];
				const newArr = removeLastNumber([1,2,3])
        expect(newArr).not.toBe(testArr);
      });
		});

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

		it('returns new object', () => {
        	expect(run).not.toBe(employees);
      	});

		it('returns correct salary', () => {
			const result = [
			{ name: "Alice", salary: 3300 },
			{ name: "Bob", salary: 2200 },
			{ name: "Vel", salary: 4950 },
			];
        	expect(run).toEqual(result);
      	});

	});

    describe('updateTasks', () => {
        it('returns object', () => {
			expect(typeof updateTasks({ name:"Alice",tasks:['water flowers']},['wash pants'])).toBe('object');
        });
		it('handles missing parameters', () => {
			expect(() => updateTasks(undefined,['empty the bin'])).toThrow('Parameter person is undefined');
			expect(() => updateTasks({ name:"Alice",tasks:['water flowers']},undefined )).toThrow('Parameter tasks is undefined');
		});

		it('returns an object with correct properties', () => {				
			expect(updateTasks({ name:"Alice",tasks:['water flowers']},'exercise')).toHaveProperty('name');
			expect(updateTasks({ name:"Alice",tasks:['water flowers']},'exercise')).toHaveProperty('tasks');
		});

		it('returns new object', () => {
			let alice = { name:"Alice",tasks:['water flowers']};
			expect(updateTasks(alice,[])).not.toBe(alice);
		});

	});

    describe('cloneObject', () => {
        it('returns an object', () => {
          expect(typeof cloneObject({},{})).toBe('object');
        });
		
		it('returns same object', () => {
			let obj = { name:"Test"};
			expect(cloneObject(obj,obj)).toBe(obj);
		});
		
		it('returns new object', () => {
			let obj2 = { name:"Testee Kull"};
			let obj1 = { task: "shopping"}
			let result = { name: "Testee Kull", task: "shopping"}
			expect(cloneObject(obj1,obj2)).toBe(obj1);
			expect(cloneObject(obj1,obj2)).toEqual(result);
		});
	});
	
	describe('calculateConfectioneryCosts', () => {
		
		it('returns array', () => {
    	    const celeb = [
				{
				  name: "Beyonce Bowls",
				  yearlyCumulativeSpend: "£44",
				  purchaseToday: {
					item: "White mice",
					costPerItem: "£3",
					amountBought: 17,
				  },
				}];
			expect(Array.isArray(calculateConfectioneryCosts(celeb))).toBe(true);
      	});

		  it('returns result', () => {
    	    	const celeb = [{ name: "Beyonce Bowls",
				yearlyCumulativeSpend: "£44",
				purchaseToday: {
			    item: "White mice",
				costPerItem: "£3",
				amountBought: 17}}];

				const celebResult = [{ name: "Beyonce Bowls",
				yearlyCumulativeSpend: "£95"}];
			expect(calculateConfectioneryCosts(celeb)).toEqual(celebResult);
      	});

		it('returns cumulative spend for all celebs in array',() => {
			const celebs = [
				{
				  name: "Beyonce Bowls",
				  yearlyCumulativeSpend: "£44",
				  purchaseToday: {
					item: "White mice",
					costPerItem: "£3",
					amountBought: 17,
				  },
				},
				{
				  name: "Kray-Z",
				  yearlyCumulativeSpend: "£28",
				  purchaseToday: {
					item: "Flying saucers",
					costPerItem: "£2",
					amountBought: 28,
				  },
				},
				{
				  name: "Matey Terry",
				  yearlyCumulativeSpend: "£36",
				  purchaseToday: {
					item: "Cola bottles",
					costPerItem: "£4",
					amountBought: 81,
				  },
				},
				{
				  name: "Justine Klimberbake",
				  yearlyCumulativeSpend: "£30",
				  purchaseToday: {
					item: "Giant jelly snakes",
					costPerItem: "£103",
					amountBought: 2,
				  },
				},
			  ];

			  const celebsResult = [
				{
				  name: "Beyonce Bowls",
				  yearlyCumulativeSpend: "£95",
				},
				{
				  name: "Kray-Z",
				  yearlyCumulativeSpend: "£84",
				},
				{
				  name: "Matey Terry",
				  yearlyCumulativeSpend: "£360", 
				},
				{
				  name: "Justine Klimberbake",
				  yearlyCumulativeSpend: "£236",
				},
			  ];

			  expect(calculateConfectioneryCosts(celebs)).toEqual(celebsResult);	  
		});
  	});
});