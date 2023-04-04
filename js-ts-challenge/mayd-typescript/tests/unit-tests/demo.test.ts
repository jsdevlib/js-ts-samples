import {FindOdd, IsOdd} from '../../src/challenge/challenge'

describe("FindOdd", () => {
  it("should return an array from string", () => {

    const result = FindOdd("abb");
  
    console.log(result);

    expect(result).toBe("a");
  })
})

describe("IsOdd Testing", () => {
  it("Given a number in a string should be Odd ", () => {
    const valueToEvaluate = "3";
    
    const isOdd = IsOdd(valueToEvaluate);

    expect(isOdd).toBe(true);
  })

  it("Given a NOT number in a string should be NOT even/number", () => {
    const valueToEvaluate = "b";
    
    const isOdd = IsOdd(valueToEvaluate);

    expect(isOdd).toBe(false);
  })
})


