function addButtonsEventListeners(checkbox, remove, edit) {
    const paragraph = edit.previousElementSibling;
    let initialText;
    checkbox.addEventListener("click", function () {
        checkbox.classList.toggle("active");
    })
    remove.addEventListener("click", function () {
        if (paragraph.isContentEditable) {
            paragraph.removeAttribute("contenteditable");
            paragraph.textContent = initialText;
            edit.src = "edit.svg";
            console.log("done")
        } else {
            remove.parentNode.remove();
        }
    })
    edit.addEventListener("click", function () {
        if (!edit.previousElementSibling.isContentEditable) {
            initialText = paragraph.textContent;
            paragraph.contentEditable = "true";
            edit.src = "check2.svg";
            paragraph.focus();

            let range = document.createRange();
            let text = paragraph.firstChild;
            range.setStart(text, text.length);
            range.setEnd(text, text.length);

            let selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            paragraph.removeAttribute("contenteditable");
            edit.src = "edit.svg";
        }
    })
}

const checkboxes = document.getElementsByClassName("custom-checkbox");
const removeButtons = document.getElementsByClassName("remove");
const editButtons = document.getElementsByClassName("edit");

for (let i = 0; i < checkboxes.length; i++) {
    let checkbox = checkboxes[i];
    let removeButton = removeButtons[i];
    let editButton = editButtons[i];
    addButtonsEventListeners(checkbox, removeButton, editButton);
}

const list = document.getElementById("list");
const add = document.getElementById("add");
const listItem = document.createElement("li");

add.addEventListener("click", function () {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("div");
    const itemText = document.createElement("p");
    const removeButton = document.createElement("img");
    const editButton = document.createElement("img");
    removeButton.src = "cross.svg";
    removeButton.className = "remove";
    editButton.src = "check2.svg";
    editButton.className = "edit";
    checkbox.className = "custom-checkbox";
    itemText.contentEditable = "true";
    itemText.textContent = "";
    listItem.append(checkbox);
    listItem.append(itemText);
    listItem.append(editButton);
    listItem.append(removeButton);
    list.append(listItem);
    itemText.focus();
    addButtonsEventListeners(checkbox, removeButton, editButton);
});

function askItemName() {

}