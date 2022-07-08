// // --------------------- Test Driven Development ---------------------

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
//     });

// --------------------------------------------
// Test For Close Button 
// --------------------------------------------

test("Clicking close button, changes item display to none", () => {
    let test1 = document.getElementById('test1')
    let test1closeBtn = document.getElementById('close1');

    test1closeBtn.click(); // Hides Item

    const actual = test1.style.display;
    const expected = 'none';

    equal(actual, expected);
})

// --------------------------------------------
// Test For Checking Task
// --------------------------------------------