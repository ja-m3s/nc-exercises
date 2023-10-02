const {
  generateMultiples,
  secureFunc,
  rememberMe,
} = require("../sections/3-closure.js");

// change 'xdescribe' to 'describe' to run the tests!
describe("generateMultiples()", () => {
  test("will return a new function", () => {
    const createMultiplesOf5 = generateMultiples();
    expect(typeof createMultiplesOf5).toBe("function");
  });
  test("new function returns empty array when passed 0", () => {
    const createMultiplesOf5 = generateMultiples(5);
    expect(createMultiplesOf5(0)).toEqual([]);
  });
  test("when new function is passed 1, it will return a single multiple in an array", () => {
    const createMultiplesOf5 = generateMultiples(5);
    expect(createMultiplesOf5(1)).toEqual([5]);

    const createMultiplesOf7 = generateMultiples(7);
    expect(createMultiplesOf7(1)).toEqual([7]);
  });
  test("when new function is given inputs > 1 it can generate more than 1 multiple in array", () => {
    const createMultiplesOf5 = generateMultiples(5);
    expect(createMultiplesOf5(2)).toEqual([5, 10]);
    expect(createMultiplesOf5(3)).toEqual([5, 10, 15]);
    expect(createMultiplesOf5(6)).toEqual([5, 10, 15, 20, 25, 30]);

    const createMultiplesOf7 = generateMultiples(7);
    expect(createMultiplesOf7(4)).toEqual([7, 14, 21, 28]);
  });
});

// change 'xdescribe' to 'describe' to run the tests!
describe("secureFunc()", () => {
  test("returns a new function", () => {
    const securedFunc = secureFunc();
    expect(typeof securedFunc).toBe("function");
  });
  test("new function returns an error message when password is incorrect", () => {
    function printSecret() {
      return "I love raw garlic";
    }
    const securedPrintSecret = secureFunc("Ilovevegans123!", printSecret);
    expect(securedPrintSecret("Wrong password!")).toBe(
      "Sorry your password is incorrect!"
    );
  });
  test("new function will return a call to the original function when password is correct", () => {
    function printSecret() {
      return "I love raw garlic!";
    }
    const securedPrintSecret = secureFunc("Ilovevegans123!", printSecret);
    expect(securedPrintSecret("Ilovevegans123!")).toBe("I love raw garlic!");
  });
  test("new function can pass all its arguments to the original function", () => {
    const mockFunction = jest.fn();

    const securedFunction = secureFunc("Ilovevegans123!", mockFunction);
    securedFunction("Ilovevegans123!", 10, 3);
    expect(mockFunction).toBeCalledWith(10, 3);

    securedFunction("Ilovevegans123!", "a", "b", "c", "d");
    expect(mockFunction).toBeCalledWith("a", "b", "c", "d");
  });
});
