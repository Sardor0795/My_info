/*

😠 Beginners sometimes do that. Bad! Curly braces are not needed:
if (n < 0) {alert(`Power ${n} is not supported`);}

😏 One line without braces – acceptable, if it’s short:
if (n < 0) alert(`Power ${n} is not supported`);
😃 The best variant:
if (n < 0) {
  alert(`Power ${n} is not supported`);
}


Style Guides
A style guide contains general rules about “how to write” code, e.g. which quotes to use, how many spaces to indent, the maximal line length, etc. A lot of minor things.

When all members of a team use the same style guide, the code looks uniform, regardless of which team member wrote it.

Of course, a team can always write their own style guide, but usually there’s no need to. There are many existing guides to choose from.

Some popular choices:

Google JavaScript Style Guide
Airbnb JavaScript Style Guide
Idiomatic.JS
StandardJS
(plus many more)
If you’re a novice developer, start with the cheat sheet at the beginning of this chapter. Then you can browse other style guides to pick up more ideas and decide which one you like best.

Automated Linters
Linters are tools that can automatically check the style of your code and make improving suggestions.

The great thing about them is that style-checking can also find some bugs, like typos in variable or function names. Because of this feature, using a linter is recommended even if you don’t want to stick to one particular “code style”.

Here are some well-known linting tools:

JSLint – one of the first linters.
JSHint – more settings than JSLint.
ESLint – probably the newest one.
All of them can do the job. The author uses ESLint.



*/
