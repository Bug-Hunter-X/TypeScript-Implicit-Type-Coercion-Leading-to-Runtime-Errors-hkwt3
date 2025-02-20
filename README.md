# TypeScript Implicit Type Coercion Bug

This example demonstrates a common issue in TypeScript where implicit type coercion can lead to unexpected runtime errors that are not caught by the compiler. The function `add` is declared to accept two numbers and return a number, but it's called with a string, resulting in string concatenation instead of numerical addition.

## How to Reproduce

1. Compile the `bug.ts` file using the TypeScript compiler.
2. Run the resulting JavaScript code.
3. Observe that the output is '510' instead of the expected 15.

## Solution

The `bugSolution.ts` file shows how to fix the issue by using stricter type checking and handling potential type errors.  Explicit type guards ensure that both parameters are numbers before performing the addition operation. 