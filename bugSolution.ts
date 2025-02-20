function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  if (typeof a === 'number' && typeof b === 'number') {
    return add(a, b);
  } else {
    console.error('Invalid input types for addSafe function. Please provide numbers only.');
    return 0; // Or handle the error as needed
  }
}

let result1 = addSafe(5, '10'); // Type error is handled
console.log(result1); // Outputs 0 and an error message

let result2 = addSafe(5, 10); // Correct usage
console.log(result2); // Outputs 15