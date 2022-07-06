// create new list item when clicking add button
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
});

