/*

Create a file named fizzBuzz.js and within that file, write a program that logs the numbers from 1 to 100 with the following rules:

For any number that is a multiple of 3, log 'Fizz'
For any number that is a multiple of 5, log 'Buzz'
For any number that is a multiple of both 3 and 5, log 'FizzBuzz'
For all other numbers, log the number.
The output of you program will look something like this:

=> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, ..., 98, Fizz, Buzz

Can you write the program so that it will run for any range of numbers?*/


function fizzBuzz(number) {

for (i = 0; i <= number; i++) {
    if (i%3 == 0 && i%5 == 0) {
    console.log("FizzBuzz");
  } else if (i%5 == 0) {
    console.log("Buzz");
  } else if (i%3 == 0) {
    console.log("Fizz");
  } else {
    console.log(i)
  }
}
};

fizzBuzz(100);
