/*

Constructor function

Constructor functions technically are regular functions. There are two conventions though:

They are named with capital letter first. -> Optional in syntax
They should be executed only with "new" operator.

function nser(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new nser("Jack");

console.log(user.name);
console.log(user.isAdmin);


When a function is executed with new, it does the following steps:

A new empty object is created and assigned to this.
The function body executes. Usually it modifies this, adds new properties to it.
The value of this is returned.

function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}

So let user = new User("Jack") gives the same result as:

let user = {
  name: "Jack",
  isAdmin: false
};


Let’s note once again – technically, any function (except arrow functions, as they don’t have this) can be used as a constructor. It can be run with new, and it will execute the algorithm above. The “capital letter first” is a common agreement, to make it clear that a function is to be run with new.


new function() { … }
If we have many lines of code all about creation of a single complex object, we can wrap them in an immediately called constructor function, like this:

// create a function and immediately call it with new
let user = new function() {
  this.name = "John";
  this.isAdmin = false;

  // ...other code for user creation
  // maybe complex logic and statements
  // local variables etc
};
This constructor can’t be called again, because it is not saved anywhere, just created and called. So this trick aims to encapsulate the code that constructs the single object, without future reuse.


Constructor mode test: new.target
Advanced stuff
The syntax from this section is rarely used, skip it unless you want to know everything.

Inside a function, we can check whether it was called with new or without it, using a special new.target property.

It is undefined for regular calls and equals the function if called with new:


That can be used inside the function to know whether it was called with new, “in constructor mode”, or without it, “in regular mode”.

We can also make both new and regular calls to do the same, like this:

function User(name) {
  if (!new.target) { // if you run me without new
    return new User(name); // ...I will add new for you
  }

  this.name = name;
}

let john = User("John"); // redirects call to new User
alert(john.name); // John

This approach is sometimes used in libraries to make the syntax more flexible. So that people may call the function with or without new, and it still works.

Probably not a good thing to use everywhere though, because omitting new makes it a bit less obvious what’s going on. With new we all know that the new object is being created.

Return from constructors
Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.

But if there is a return statement, then the rule is simple:

If return is called with an object, then the object is returned instead of this.
If return is called with a primitive, it’s ignored.
In other words, return with an object returns that object, in all other cases this is returned.

Omitting parentheses
By the way, we can omit parentheses after new:

let user = new User; // <-- no parentheses
// same as
let user = new User();
Omitting parentheses here is not considered a “good style”, but the syntax is permitted by specification.


Methods in constructor
Using constructor functions to create objects gives a great deal of flexibility. The constructor function may have parameters that define how to construct the object, and what to put in it.

Of course, we can add to this not only properties, but methods as well.

For instance, new User(name) below creates an object with the given name and the method sayHi:

function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); // My name is: John

/
john = {
   name: "John",
   sayHi: function() { ... }
}
/
To create complex objects, there’s a more advanced syntax, classes, that we’ll cover later.


Summary
Constructor functions or, briefly, constructors, are regular functions, but there’s a common agreement to name them with capital letter first.
Constructor functions should only be called using new. Such a call implies a creation of empty this at the start and returning the populated one at the end.
We can use constructor functions to make multiple similar objects.

JavaScript provides constructor functions for many built-in language objects: like Date for dates, Set for sets and others that we plan to study.

Objects, we’ll be back!
In this chapter we only cover the basics about objects and constructors. They are essential for learning more about data types and functions in the next chapters.

After we learn that, we return to objects and cover them in-depth in the chapters Prototypes, inheritance and Classes.


*/
