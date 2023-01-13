/*

nullish coaleasing ??
null/undefined


result = (a !== null && a !== undefined) ? a : b;  ===  a ?? b

|| returns the first truthy value.
?? returns the first defined value.


In practice though, we may want to use default value only when the variable is null/undefined. That is, when the value is really unknown/not set.

For example, consider this:

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0


The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.

It’s used to assign default values to variables:

// set height=100, if height is null or undefined
height = height ?? 100;
The operator ?? has a very low precedence, only a bit higher than ? and =, so consider adding parentheses when using it in an expression.

It’s forbidden to use it with || or && without explicit parentheses.


*/
