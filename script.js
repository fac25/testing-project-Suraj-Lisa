// --------------------- Creates new list item when clicking add button ---------------------
const input = document.querySelector("input")
const addBtn = document.querySelector("button");
const hideBtn = document.querySelector(".toggle");

const addItems = () => {
    let listItem = document.createElement("li");
    let list = document.querySelector("ul")
    let task = document.querySelector("input").value;
    let text = document.createTextNode(task);
    list.appendChild(listItem);
    listItem.appendChild(text);

    if (task == "") {
        alert("Please add some tasks");
    }

// Adds "close" button to the new list item
    let closeBtn = document.createElement("button"); 
    let closeIcon = document.createTextNode("\u00D7"); // Close Icon
    closeBtn.className = 'closeBtn';
    
    closeBtn.appendChild(closeIcon);
    listItem.appendChild(closeBtn);

// Close Button deletes new list item
    closeBtn.onclick = function() {
        let ele = this.parentElement;
        ele.style.display = 'none';
    }
//removing text from input after task is added to the list
     document.querySelector("input").value ="";   
}

//event listener for clicking the button
addBtn.addEventListener("click", (e) => {
    e.preventDefault();
addItems();
});
// //event listener for pressing enter
// input.addEventListener("keyup", (e) => {
//     if (e.key === "Enter") {
//         e.preventDefault();
//         addItems();
//     }
// })

// --------------------- Test Items ---------------------

const listItemHome = document.getElementsByTagName("li"); 

// Adds "close" Button to Test Item
for (let i = 0; i <listItemHome.length; i++) {
    let closeBtn = document.createElement("button");
    let closeIcon = document.createTextNode("\u00D7");
    closeBtn.className = 'closeBtn';
    closeBtn.appendChild(closeIcon);
    listItemHome[i].appendChild(closeBtn);
}

// Close Button Deletes Test Item
const close = document.querySelectorAll('.closeBtn'); 
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let ele = this.parentElement;
        ele.style.display = 'none';
    }
}

// Adds "check" Button To Test Item

// for (let i = 0; i < listItemHome.length; i++) {
//     let checkBtn = document.createElement("button");
//     let checkIcon = document.createTextNode("✅")
//     checkBtn.className = 'checkBtn';
//     checkBtn.appendChild(checkIcon);
//     listItemHome[i].appendChild(checkBtn);
// }

// Checks Test Item On Button Click

// const check = document.querySelectorAll('.checkBtn');
// for(let i = 0; i < check.length; i++) {
//     check[i].onclick = function() {
//         let ele = this.parentElement;
//         ele.classList.toggle('checked')
//     }
// }

// Checks Item on 'click'
const uList = document.querySelector('ul');

uList.addEventListener('click', function(event) {

    let element = event.target;
    let parent = element.parentElement;

    if (element.className === '') {

        element.className = 'checked'; // Checks task
        parent.appendChild(element, element.parentElement.lastChild); // places element as lastchild

    } else if (element.className === 'checked') {
        element.className = ''; // Unchecks 
        parent.insertBefore(element, element.parentElement.firstChild); // places element as firstchild
    }

}, false);


// hide/show toggle button

hideBtn.addEventListener("click", (e) => {
    let items = document.querySelector("li");
    console.log(items);
    for (let i=0; i < items.length; i++) {
        items.classList.toggle("hide")
    }
    // items.forEach(() => {
    //     console.log("hi")
    //     items.classList.add("hide");
    // })
    // let items = document.querySelectorAll(".checked");
    // Array.from(items);
    // console.log(items);
    // items.forEach(item, () => {
    //     item.classList.add("hide");
    // })
   
    });

