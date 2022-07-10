# testing-project-Suraj-Lisa
[Week 8 Project: Testing](https://learn.foundersandcoders.com/course/syllabus/pre-apprenticeship/testing/project/)

[see tutorial here](https://www.w3schools.com/howto/howto_js_todolist.asp)

[view page here](https://fac25.github.io/testing-project-Suraj-Lisa/)

- [x] Add tasks to a list so that I can keep track of them
     
```js
test("Submitting a new task adds it to the list", () => {

     let input = document.querySelector("input");
     let button = document.querySelector("button");
     input.value = "Write tests";
     button.click();
     const list = document.querySelector("li");
     console.log(list);
     
     equal (list.textContent, input.value + "\u00D7");
     //x is appended symbol for deleting items of list
     list.remove();
     input.value="";
     
});
```

- [x] Delete things from the list if I don’t need to do them anymore

```js
test("Deleting an entry removes it from the list", () => {

    let test1 = document.getElementById('test1')
    let test1closeBtn = document.getElementById('close1');

    test1closeBtn.click(); // Hides Item

    const actual = test1.style.display;
    const expected = 'none';

    equal(actual, expected);
})
```

- [x] Check things off my list so that I can see what I’ve done

```js
test("Checking an entry marks it as complete", () => {

    let test2 = document.getElementById('test2')
    test2.click()

    let actual = test2.className;
    let expected = 'checked';

    equal(actual, expected)

})

test("Clicking 'checked' item unchecks item", () => {

    let test2 = document.getElementById('test2')
    test2.click();

    let actual = test2.className;
    let expected = '';

    equal(actual, expected, `expected '${expected}' and recieved '${actual}'`)
})
```

- [ ] Use all the features of the app without a mouse

Stretch goal:
- [ ] Filter out completed to-dos from my list so that I can focus on what’s left to do

test("Toggling the filter hides completed tasks from the list", () => {
  // test goes here
});

Acceptance Criteria
- A working to-do list
- Tests for (at least) each user story
- A responsive, mobile-first design
- Ensure your app is accessible to as many different users as possible


