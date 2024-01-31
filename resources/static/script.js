const checkboxes = document.getElementsByClassName("custom-checkbox");
const removeButtons = document.getElementsByClassName("remove");
const editButtons = document.getElementsByClassName("edit");
let currentlyEdited;
let editButton;
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
            currentlyEdited = paragraph;
            editButton = edit;

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

for (let i = 0; i < checkboxes.length; i++) {
    let checkbox = checkboxes[i];
    let removeButton = removeButtons[i];
    let editButton = editButtons[i];
    addButtonsEventListeners(checkbox, removeButton, editButton);
}

// creating a list item
const list = document.getElementById("list");
const add = document.getElementById("add");

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


// stop editing when clicking outside the element or pressing enter
document.addEventListener("click", function (event) {
    if (!currentlyEdited.contains(event.target) && !editButton.contains(event.target)) {
        currentlyEdited.removeAttribute("contenteditable");
        editButton.src = "edit.svg";
    }
})

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        currentlyEdited.removeAttribute("contenteditable");
        editButton.src = "edit.svg";
    }
})
