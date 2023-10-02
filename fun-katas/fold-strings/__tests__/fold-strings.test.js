const {foldString, foldStringGPT } = require("../fold-string.js");
//skipped
describe("foldString()", () => {
  test("simple fold", () => {
    expect(foldString("code")).toEqual("oced");
  });
  test("abcdef fold", () => {
    expect(foldString("abcdef")).toEqual("cbafed");
  });
  test("javascript fold", () => {
    expect(foldString("javascript")).toEqual("savajtpirc");
  });
  test("odd northcoders fold", () => {
    expect(foldString("Northcoders")).toEqual("htroNcsredo");
  });
  test("longer sentence fold", () => {
    expect(foldString("javascript is cool")).toEqual("savajtpirc is oclo");
  });
});

describe("foldStringGPT()", () => {
  test("simple fold", () => {
    expect(foldStringGPT("code")).toEqual("oced");
  });
  test("abcdef fold", () => {
    expect(foldStringGPT("abcdef")).toEqual("cbafed");
  });
  test("javascript fold", () => {
    expect(foldStringGPT("javascript")).toEqual("savajtpirc");
  });
  test("odd northcoders fold", () => {
    expect(foldStringGPT("Northcoders")).toEqual("htroNcsredo");
  });
  test("longer sentence fold", () => {
    expect(foldStringGPT("javascript is cool")).toEqual("savajtpirc is oclo");
  });
});
