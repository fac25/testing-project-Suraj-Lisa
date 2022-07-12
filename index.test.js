// --------------------------------------------
// Test 1 For Adding New Task
// --------------------------------------------

test("Submitting a new task adds it to the list", () => {

    //  let input = document.querySelector("input");
    //  let button = document.querySelector("button");
    //  input.value = "Write tests";
    //  button.click();
    //  const list = document.querySelector("li");
    //  console.log(list);
    //  equal (list.textContent, input.value + "\u00D7");
    //  //x is appended symbol for deleting items of list
    //  list.remove();
    //  input.value="";

    // Creates a test task
    template('Write tests')

    //Results
     const list = document.querySelector("li");
     const actual = list.textContent;
     const expected = 'Write tests' + "\u00D7";

     equal(actual, expected)
 });

// --------------------------------------------
// Test 2 For Close Button 
// --------------------------------------------

test("Deleting an entry removes it from the list", () => {

    // Creates a test task
    template();

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


// --------------------------------------------
// Test 3 For Checking Task
// --------------------------------------------

test("Checking an entry marks it as complete", () => {

    // Creates a task
    template();

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

    template();

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

// --------------------------------------------
// Test 4 
// --------------------------------------------

//this test triggers the if-condition to check for input
// test("after adding an item to the list, the textbar is empty", () => {
//     let input = document.querySelector("input");
//     let button = document.querySelector("button");
//     button.click();
//     let expected = "";
//     equal(input.value, expected, "pass: expected and received an empty string");
// })