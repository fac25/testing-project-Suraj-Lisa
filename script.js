// --------------------- Creates new list item when clicking add button ---------------------
const addBtn = document.querySelector("button");

addBtn.addEventListener("click", (e) => {
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

});

// --------------------- Test Items ---------------------

const listItemHome = document.getElementsByTagName("li"); // Adds "close" Button
for (let i = 0; i <listItemHome.length; i++) {
    let closeBtn = document.createElement("button");
    let closeIcon = document.createTextNode("\u00D7");
    closeBtn.className = 'closeBtn';
    closeBtn.appendChild(closeIcon);
    listItemHome[i].appendChild(closeBtn);
}

const close = document.querySelectorAll('.closeBtn'); // Close Button Deletes Item
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let ele = this.parentElement;
        ele.style.display = 'none';
    }
}