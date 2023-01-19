/*

In BDD, the spec goes first, followed by implementation. At the end we have both the spec and the code.

The spec can be used in three ways:

As Tests – they guarantee that the code works correctly.
As Docs – the titles of describe and it tell what the function does.
As Examples – the tests are actually working examples showing how a function can be used.
With the spec, we can safely improve, change, even rewrite the function from scratch and make sure it still works right.

That’s especially important in large projects when a function is used in many places. When we change such a function, there’s just no way to manually check if every place that uses it still works right.

Without tests, people have two ways:

To perform the change, no matter what. And then our users meet bugs, as we probably fail to check something manually.
Or, if the punishment for errors is harsh, as there are no tests, people become afraid to modify such functions, and then the code becomes outdated, no one wants to get into it. Not good for development.
Automatic testing helps to avoid these problems!

If the project is covered with tests, there’s just no such problem. After any changes, we can run tests and see a lot of checks made in a matter of seconds.

Besides, a well-tested code has better architecture.

Naturally, that’s because auto-tested code is easier to modify and improve. But there’s also another reason.

To write tests, the code should be organized in such a way that every function has a clearly described task, well-defined input and output. That means a good architecture from the beginning.

In real life that’s sometimes not that easy. Sometimes it’s difficult to write a spec before the actual code, because it’s not yet clear how it should behave. But in general writing tests makes development faster and more stable.

Later in the tutorial you will meet many tasks with tests baked-in. So you’ll see more practical examples.

Writing tests requires good JavaScript knowledge. But we’re just starting to learn it. So, to settle down everything, as of now you’re not required to write tests, but you should already be able to read them even if they are a little bit more complex than in this chapter.

*/