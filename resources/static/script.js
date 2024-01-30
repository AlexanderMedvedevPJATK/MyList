function addCheckboxAction(checkbox) {
    checkbox.addEventListener("click", function () {
        checkbox.classList.toggle("active");
    })
}

let checkboxes = document.getElementsByClassName("custom-checkbox");

for (let i = 0; i < checkboxes.length; i++) {
    let checkbox = checkboxes[i];

    addCheckboxAction(checkbox);
}

const list = document.getElementById("list");
const add = document.getElementById("add");
const listItem = document.createElement("li");

add.addEventListener("click", function () {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("div");
    const itemText = document.createElement("p");
    checkbox.className = "custom-checkbox";
    addCheckboxAction(checkbox);
    itemText.textContent = "123";
    listItem.append(checkbox);
    listItem.append(itemText);
    list.append(listItem);
});
