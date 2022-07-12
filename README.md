# testing-project-Suraj-Lisa
[Week 8 Project: Testing](https://learn.foundersandcoders.com/course/syllabus/pre-apprenticeship/testing/project/)

[see tutorial here](https://www.w3schools.com/howto/howto_js_todolist.asp)

[view page here](https://fac25.github.io/testing-project-Suraj-Lisa/)

- [x] Add tasks to a list so that I can keep track of them
     
```js
test("Submitting a new task adds it to the list", () => {

    // Creates a new task
    template('Write tests')

    //Results
    const list = document.querySelector("li");
    const actual = list.textContent;
    const expected = 'Write tests' + "\u00D7";

    equal(actual, expected)

    // Resets Field
    document.querySelector('#list').innerHTML = "";
 });
```

- [x] Delete things from the list if I don’t need to do them anymore

```js
test("Deleting an entry removes it from the list", () => {

    // Creates a test task
    template('Test');

    // Should delete task
    const closeBtn = document.querySelector('.closeBtn')
    closeBtn.click();

    // Results
    const actual = document.getElementById('task').style.display;
    const expected = 'none'

    equal(actual, expected)

    // Resets Field
    document.querySelector('#list').innerHTML = "";
})
```

- [x] Check things off my list so that I can see what I’ve done

```js
test("Checking an entry marks it as complete", () => {

    // Creates a task
    template('Test');

    // Should check task
    const task = document.getElementById('task');
    task.click();

    // Results
    const actual = task.className;
    const expected = 'checked';

    equal(actual, expected);

     // Resets Field
     document.querySelector('#list').innerHTML = "";
 })

 test("Clicking 'checked' item unchecks item", () => {

    template('Test');

    const task = document.getElementById('task');
    task.click(); // First click should check task
    task.click(); // Second click should uncheck task

    // Results
    let actual = task.className;
    let expected = "";

    equal(actual, expected, `expected '${expected}' and recieved '${actual}'`)

     // Resets Field
    document.querySelector('#list').innerHTML = "";
 } )
```

- [ ] Use all the features of the app without a mouse

Stretch goal:
- [ ] Filter out completed to-dos from my list so that I can focus on what’s left to do

test("Toggling the filter hides completed tasks from the list", () => {
  // test goes here
});