/*

Object methods, this

Object-oriented programming
When we write our code using objects to represent entities, that’s called object-oriented programming, in short: “OOP”.

method shorthand

this

The value of this is the object “before dot”, the one used to call the method.


“this” is not bound

In JavaScript, keyword this behaves unlike most other programming languages. It can be used in any function, even if it’s not a method of an object.

The value of this is evaluated during the run-time, depending on the context.

var n = 5 vs n = 5


function sayHi() {
  console.log(this);
}

sayHi();


The value of this is evaluated during the run-time, depending on the context.

For instance, here the same function is assigned to two different objects and has different “this” in the calls:

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)
The rule is simple: if obj.f() is called, then this is obj during the call of f. So it’s either user or admin in the example above.


"use strict"; vs non sue strict

function name() {
  alert(this);
}
name();

Calling without an object: this == undefined
We can even call the function without an object at all:

function sayHi() {
  alert(this);
}

sayHi(); // undefined
In this case this is undefined in strict mode. If we try to access this.name, there will be an error.

In non-strict mode the value of this in such case will be the global object (window in a browser, we’ll get to it later in the chapter Global object). This is a historical behavior that "use strict" fixes.

Usually such call is a programming error. If there’s this inside a function, it expects to be called in an object context.


The consequences of unbound this
If you come from another programming language, then you are probably used to the idea of a "bound this", where methods defined in an object always have this referencing that object.

In JavaScript this is “free”, its value is evaluated at call-time and does not depend on where the method was declared, but rather on what object is “before the dot”.

The concept of run-time evaluated this has both pluses and minuses. On the one hand, a function can be reused for different objects. On the other hand, the greater flexibility creates more possibilities for mistakes.

Here our position is not to judge whether this language design decision is good or bad. We’ll understand how to work with it, how to get benefits and avoid problems.

()=> func not this


Summary
Functions that are stored in object properties are called “methods”.
Methods allow objects to “act” like object.doSomething().
Methods can reference the object as this.
The value of this is defined at run-time.

When a function is declared, it may use this, but that this has no value until the function is called.
A function can be copied between objects.
When a function is called in the “method” syntax: object.method(), the value of this during the call is object.
Please note that arrow functions are special: they have no this. When this is accessed inside an arrow function, it is taken from outside.


function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user = makeUser();

alert( user.ref().name ); // John
Now it works, because user.ref() is a method. And the value of this is set to the object before dot ..

let calc = {
  count: 0,
  read(a, b) {
    console.log(this.count);
    return this;
  },
  add() {
    this.count++;
    return this;
  },
  sub() {
    this.count--;
    return this;
  },
};

calc.read().add().read().add().add().read();

*/
