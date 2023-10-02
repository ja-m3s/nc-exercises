const VendingMachine = require("../sections/2-oop-vending-machine.js");

describe("has properties", () => {
  test("has properties", () => {
    const vm = new VendingMachine()
    expect(vm).toHaveProperty('credit')
    expect(vm).toHaveProperty('stock')

  });
});

describe("stock", () => {
  test("stock has rows", () => {
    const vm = new VendingMachine()
    expect(vm.stock).toEqual({"A": {}, "B": {}, "C": {}});
  });
});

describe("addStock", () => {
  test("addStock adds stock", () => {
    const marsBars = { name: "marsBar", price: 50, quantity: 6 };
    const testMachine = new VendingMachine();
    testMachine.addStock(marsBars, "A");
    expect(testMachine.stock).toEqual({"A": { name: 'marsBar', price: 50, quantity: 6 }, "B": {}, "C": {}});
  });
});

describe("addCredit", () => {
  test("addCredit updates credit", () => {
    const testMachine = new VendingMachine();
    testMachine.credit; // 0
    testMachine.addCredit(50);
    testMachine.credit; // 50
    testMachine.addCredit(10);
    testMachine.credit; // 60;
    expect(testMachine.credit).toEqual(60);
  });
});

describe("purchaseItem", () => {
  test("purchase with insufficient credit", () => {
    const marsBars = { name: "marsBar", price: 50, quantity: 6 };
    const testMachine = new VendingMachine();
    testMachine.addStock(marsBars, "A");
    testMachine.addCredit(30);
    expect(testMachine.purchaseItem("A")).toEqual('Insufficient credit!'); 
  });
});

describe("purchaseItem", () => {
  test("purchase with sufficient credit", () => {
    const marsBars = { name: "marsBar", price: 50, quantity: 6 };
    const testMachine = new VendingMachine();
    testMachine.addStock(marsBars, "A");
    testMachine.addCredit(60);
     
    expect(testMachine.purchaseItem("A")).toEqual('marsBar'); 
    expect(testMachine.credit).toEqual(10); 
    expect(testMachine.stock).toEqual({ A: { name: 'marsBar', price: 50, quantity: 5 },B: {},C: {}}); 
   
  });
});