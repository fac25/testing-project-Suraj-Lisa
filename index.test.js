// Test ---------------------------

test("Testing Shouls Pass", () => {
    const actual = 1;
    const expected = 1;
    equal(actual, expected, "Working")
})


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