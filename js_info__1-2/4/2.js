/*

For comparisons like obj1 > obj2 or for a comparison against a primitive obj == 5, objects are converted to primitives. We’ll study how object conversions work very soon, but to tell the truth, such comparisons are needed very rarely – usually they appear as a result of a programming mistake.

const can be modified

It might seem that the line (*) would cause an error, but it does not. The value of user is constant, it must always reference the same object, but properties of that object are free to change.

In other words, the const user gives an error only if we try to set user=... as a whole.


cloning primitive level , nested clonng


obj cloning 4 ways
4th spread operatio

There are also other methods of cloning an object, e.g. using the spread syntax clone = {...user}, covered later in the tutorial.


Nested cloning
Until now we assumed that all properties of user are primitive. But properties can be references to other objects.


implements


The structuredClone method can clone most data types, such as objects, arrays, primitive values.

It also supports circular references, when an object property references the object itself (directly or via a chain or references).

let user = {};
// let's create a circular reference:
// user.me references the user itself
user.me = user;

let clone = structuredClone(user);
alert(clone.me === clone); // true


Although, there are cases when structuredClone fails.

For instance, when an object has a function property:


let obj = {
    name: "nn",
    get() {
        console.log(5);
    },
};

let obj2 = structuredClone(obj);

obj2.get();
console.log(obj2);


only strdClone cannot clone function

for in, Obj.assign, ...op vs strdClone



*/
