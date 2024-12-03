export function sum(num1 = 0, num2 = 0) {
  // write a function that takes two numbers as arguments and returns their sum
  // argument default values are 0
  // if wrong data type is passed, throw an error
  // Define your function here

  const calculateSum = (n1, n2) => {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
      throw new Error("Both arguments must be numbers");
    }
    return n1 + n2;
  };

  return calculateSum(num1, num2);

}

export function sumOfAll(...args) {
  // write a function that takes any number of arguments and returns their sum
  // if wrong data type is passed, throw an error
  // Define your function here
  if (!args.every(arg => typeof arg === "number")) {
    throw new Error("All arguments must be numbers");
  }

  return args.reduce((sum, val) => sum + val, 0);
  // return (...args) => {
  //   if (!args.every(arg => typeof arg === "number")) {
  //     throw new Error("All arguments must be numbers");
  //   }

  //   let sum = 0; 
  //   for (let i = 0; i < args.length; i++) {
  //     sum += args[i]; 
  //   }

  //   return sum; 
  // };
}
