// --------------------------------------------
// Test For Adding New Task
// --------------------------------------------

// test("Submitting a new task adds it to the list", () => {

//      let input = document.querySelector("input");
//      let button = document.querySelector("button");
//      input.value = "Write tests";
//      button.click();
//      const list = document.querySelector("li");
//      console.log(list);
//      equal (list.textContent, input.value + "\u00D7");
//      //x is appended symbol for deleting items of list
//      list.remove();
//      input.value="";
//  });

// --------------------------------------------
// Test 1 For Close Button 
// --------------------------------------------

test("Deleting an entry removes it from the list", () => {

    let test1 = document.getElementById('test1')
    let test1closeBtn = document.getElementById('close1');

    test1closeBtn.click(); // Hides Item

    const actual = test1.style.display;
    const expected = 'none';

    equal(actual, expected);
})

// --------------------------------------------
// Test 2 For Checking Task
// --------------------------------------------

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

//this test triggers the if-condition to check for input
// test("after adding an item to the list, the textbar is empty", () => {
//     let input = document.querySelector("input");
//     let button = document.querySelector("button");
//     button.click();
//     let expected = "";
//     equal(input.value, expected, "pass: expected and received an empty string");
// })