const {
  createPoll,
  makeNameTags,
  removeAgents,
} = require("../sections/1-human-resources.js");

const NCFruitBowl = require("../data/poll-data.js")

describe("removeAgents", () => {
  const employees = [
    { name: "Sam", profession: "artist" },
    { name: "Mitch", profession: "mole" },
  ];
  
  test("returns new object", () => {
    expect(removeAgents(employees)).not.toBe(employees);
  });
  
  test("removes moles", () => {
      expect(removeAgents(employees)).toEqual([{name: 'Sam', profession: 'artist'}]);
  });
});

describe("makeNameTags", () => {
  const guests = [
    {
      title: "Mr",
      forename: "Sam",
      surname: "Caine",
      age: 30,
      company: "Northcoders",
    },
    {
      title: "Mr",
      forename: "Kermit",
      surname: "The Frog",
      age: 35,
      company: "Jim Henson Studios",
    },
  ];
  
  test("returns new object", () => {
    expect(makeNameTags(guests)).not.toBe(guests);
  });
  
  test("returns name tag", () => {
      expect(makeNameTags(guests)).toEqual(['Mr Sam Caine, Northcoders', 'Mr Kermit The Frog, Jim Henson Studios']);
  });
});

describe("createPoll", () => {
   
  test("returns new object", () => {
    let data = [] 
    expect(createPoll(data)).not.toBe(data);
  });

  test("returns poll data for cake and biscuits", () => {
    expect(createPoll(["cake", "biscuit", "biscuit"])).toEqual({ cake: 1, biscuit: 2 });
});

test("returns poll data for pets", () => {
  expect(createPoll(["dog", "dog", "dog"])).toEqual({ dog: 3 });
});
  
  test("returns poll data for fruit bowl", () => {
      expect(createPoll(NCFruitBowl)).toEqual({
        apple: 276,
        pear: 223,
        banana: 263,
        orange: 238,
        'lonesome plum': 1
      });
  });
});



