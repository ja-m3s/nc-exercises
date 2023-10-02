const {
  deepEntries,
  deeplyEquals,
  flat,
} = require("../sections/4-recursion.js");

describe("deepEntries", () => {
  test("no nesting", () => {
    expect(deepEntries({ name: "Sam" })).toEqual([ ["name", "Sam"] ])
  });
  test("no nesting and two entities", () => {
    expect(deepEntries({ name: "Sam", favBook: "Blood Meridian" })).toEqual([ ["name", "Sam"], ["favBook", "Blood Meridian"] ])
  });
  test("nesting", () => {
    expect(deepEntries({ name: "Sam", pets: { name: "fido" } })).toEqual([
      ["name", "Sam"],
      ["pets",[["name", "fido"]]]
    ])
  });
  test("deeper nesting", () => {
    expect(deepEntries({
      name: "Sam",
      favBook: { title: "Blood Meridian", author: { name: "Cormac McCarthy" } },
    })).toEqual([
      ["name","Sam"],
      ["favBook",[["title","Blood Meridian"],["author", [["name","Cormac McCarthy"]]]
    ]]])
  });
});

describe("deeplyEquals", () => {
  test("no nesting and equal", () => {
    expect(deeplyEquals("a","a")).toEqual(true)
  });
  test("no nesting and not equal", () => {
    expect(deeplyEquals("a","b" )).toEqual(false)
  });
  test("nesting", () => {
    expect(deeplyEquals([1, 2, { a: "hello" }], [1, 2, { a: "hello" }])).toEqual(true)
  });
  test("nesting and false", () => {
    expect(deeplyEquals([1, 2, { a: "hello" }], [1, 2, { a: "bye" }])).toEqual(false)
  });
});

describe("flat", () => {
  test("first test here...", () => {});
});

