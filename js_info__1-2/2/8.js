/*

Math

operand / argument

Terms: “unary”, “binary”, “operand”

operator : unary/binary

- same symbol but 2 operator


Formally, in the examples above we have two different operators that share the same symbol: the negation operator, a unary operator that reverses the sign, and the subtraction operator, a binary operator that subtracts one number from another.

------

Exponentiation **
straightforward


Remainder %
The remainder operator %, despite its appearance, is not related to percents.

The result of a % b is the remainder of the integer division of a by b.


alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)


The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.
console.log('8' / 'n'); //NaN

Numeric conversion, unary +
The plus + exists in two forms: the binary form that we used above and the unary form.

The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

It actually does the same thing as Number(...), but is shorter.

 +a + +b

From a mathematician’s standpoint, the abundance of pluses may seem strange. But from a programmer’s standpoint, there’s nothing special: unary pluses are applied first, they convert strings to numbers, and then the binary plus sums them up.

Why are unary pluses applied to values before the binary ones? As we’re going to see, that’s because of their higher precedence.

Operator precedence
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

Assignment = returns a value

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0


Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: /=, -=, etc.

Such operators have the same precedence as a normal assignment, so they run after most other calculations:

Important:
Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error. (++null error)

Let’s clarify. As we know, all operators return a value. Increment/decrement is no exception. The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).

prior to increment

The operators ++/-- can be used inside expressions as well. Their precedence is higher than most other arithmetical operations.

We advise a style of “one line – one action”:
let counter = 1;
alert( 2 * counter );
counter++;

fiddle

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise_operators


Comma
The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.

The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.

let a = (1 + 2, 3 + 4);

alert( a ); // 7 (the result of 3 + 4)
Here, the first expression 1 + 2 is evaluated and its result is thrown away. Then, 3 + 4 is evaluated and returned as the result.

Comma has a very low precedence
Please note that the comma operator has very low precedence, lower than =, so parentheses are important in the example above.

Without them: a = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a = 3, 7, then the assignment operator = assigns a = 3, and the rest is ignored. It’s like (a = 1 + 2), 3 + 4.



null + 1 = 1
" \t \n" - 2 = -2
" \t \n" - 2 = -2

append prepend

null becomes 0 after the numeric conversion.
undefined becomes NaN after the numeric conversion.
empty str -> 0

null, false, '' -> 0  in numeric convertion


*/
