function addCheckboxAndRemoveAction(checkbox, remove) {
    checkbox.addEventListener("click", function () {
        checkbox.classList.toggle("active");
    })
    remove.addEventListener("click", function () {
        remove.parentNode.remove();
    })
}

let checkboxes = document.getElementsByClassName("custom-checkbox");
let removeButtons = document.getElementsByClassName("remove");

for (let i = 0; i < checkboxes.length; i++) {
    let checkbox = checkboxes[i];
    let removeButton = removeButtons[i];
    addCheckboxAndRemoveAction(checkbox, removeButton);
}

const list = document.getElementById("list");
const add = document.getElementById("add");
const listItem = document.createElement("li");

add.addEventListener("click", function () {
    let tmp = window.prompt("Item text");
    if (tmp != null) {
        const listItem = document.createElement("li");
        const checkbox = document.createElement("div");
        const itemText = document.createElement("p");
        const removeButton = document.createElement("img");
        removeButton.src = "cross.svg";
        checkbox.className = "custom-checkbox";
        itemText.textContent = tmp;
        addCheckboxAndRemoveAction(checkbox, removeButton);
        listItem.append(checkbox);
        listItem.append(itemText);
        listItem.append(removeButton);
        list.append(listItem);
    }
});

function askItemName() {

}