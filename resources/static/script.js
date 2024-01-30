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
        checkbox.className = "custom-checkbox";
        addCheckboxAction(checkbox);
        if (itemText.textContent != null) {
            listItem.append(checkbox);
            listItem.append(itemText);
            list.append(listItem);
            console.log(itemText.textContent)
        }
    }
});

function askItemName() {

}