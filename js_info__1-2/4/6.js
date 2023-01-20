/*

Optional chaining '?.'
A recent addition
This is a recent addition to the language. Old browsers may need polyfills.
The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.

In many practical cases we’d prefer to get undefined instead of an error here (meaning “no street”).

…and another example. In Web development, we can get an object that corresponds to a web page element using a special method call, such as document.querySelector('.elem'), and it returns null when there’s no such element.

E.g. let’s get user.address.street.name in a similar fashion.

let user = {}; // user has no address

alert(user.address ? user.address.street ? user.address.street.name : null : null);  <----------------
That’s just awful, one may even have problems understanding such code.


There’s a little better way to write it, using the && operator:

let user = {}; // user has no address

alert( user.address && user.address.street && user.address.street.name ); // undefined (no error) <------------



Optional chaining
The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.

Further in this article, for brevity, we’ll be saying that something “exists” if it’s not null and not undefined.

In other words, value?.prop:

works as value.prop, if value exists,
otherwise (when value is undefined/null) it returns undefined.

Here’s the safe way to access user.address.street using ?.:

let user = {}; // user has no address

alert( user?.address?.street ); // undefined (no error)

Reading the address with user?.address works even if user object doesn’t exist:

let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined

Don’t overuse the optional chaining
We should use ?. only where it’s ok that something doesn’t exist.

For example, if according to our code logic user object must exist, but address is optional, then we should write user.address?.street, but not user?.address?.street.

Then, if user happens to be undefined, we’ll see a programming error about it and fix it. Otherwise, if we overuse ?., coding errors can be silenced where not appropriate, and become more difficult to debug.

The variable before ?. must be declared
If there’s no variable user at all, then user?.anything triggers an error:

// ReferenceError: user is not defined
user?.address;
The variable must be declared (e.g. let/const/var user or as a function parameter). The optional chaining works only for declared variables.

Short-circuiting
As it was said before, the ?. immediately stops (“short-circuits”) the evaluation if the left part doesn’t exist.

So, if there are any further function calls or operations to the right of ?., they won’t be made.

For instance:

let user = null;
let x = 0;

user?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++

alert(x); // 0, value not incremented



Other variants: ?.(), ?.[]
The optional chaining ?. is not an operator, but a special syntax construct, that also works with functions and square brackets.

For example, ?.() is used to call a function that may not exist.

In the code below, some of our users have admin method, and some don’t:

let userAdmin = {
  admin() {
    alert("I am admin");
  }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.();



Here, in both lines we first use the dot (userAdmin.admin) to get admin property, because we assume that the user object exists, so it’s safe read from it.

Then ?.() checks the left part: if the admin function exists, then it runs (that’s so for userAdmin). Otherwise (for userGuest) the evaluation stops without errors.


The ?.[] syntax also works, if we’d like to use brackets [] to access properties instead of dot .. Similar to previous cases, it allows to safely read a property from an object that may not exist.

let key = "firstName";

let user1 = {
  firstName: "John"
};

let user2 = null;

alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined


Also we can use ?. with delete:

delete user?.name; // delete user.name if user exists


We can use ?. for safe reading and deleting, but not writing
The optional chaining ?. has no use on the left side of an assignment.

For example:

let user = null;

user?.name = "John"; // Error, doesn't work
// because it evaluates to: undefined = "John"



Summary
The optional chaining ?. syntax has three forms:

obj?.prop – returns obj.prop if obj exists, otherwise undefined.
obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.
As we can see, all of them are straightforward and simple to use. The ?. checks the left part for null/undefined and allows the evaluation to proceed if it’s not so.

A chain of ?. allows to safely access nested properties.

Still, we should apply ?. carefully, only where it’s acceptable, according to our code logic, that the left part doesn’t exist. So that it won’t hide programming errors from us, if they occur.

*/
