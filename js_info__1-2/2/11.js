/*

Logical operators

|| && ! ??

|| For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were false), returns the last operand.
In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.

Short-circuit evaluation.

Precedence of AND && is higher than OR ||

! !! (not) (!!true)
Boolean(value)

precedence ! > ||,&&


alert(alert(1) || 2 || alert(3))
alert( alert(1) && alert(2) );



*/
