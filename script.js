const todoForm = document.querySelector(".todo-form")
const todoInput = document.querySelector("input");
const todoCollection = document.querySelector(".todo-collection");

todoForm.addEventListener("submit", addTodo);

function addTodo(e) 
{
  if (todoInput.value=== "")
   {
    alert("You cannot enter empty value");
  } 
  else
   {
    const li = document.createElement("li");
    const todoTitle = document.createElement("span");
    const editableInput = document.createElement("input");
    const editButton = document.createElement("button");
    const saveButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    li.classList.add("todo-collection__item");
    todoTitle.classList.add("todo-collection__item__title");
    todoTitle.innerText = todoInput.value;

    editableInput.classList.add("input");
    editableInput.classList.add("input--todo");
    editableInput.classList.add("hidden");
    editableInput.type = "text";
    editableInput.value = todoInput.value;

    editButton.classList.add("button");
    editButton.classList.add("button--todo");
    editButton.classList.add("button--edit");
    editButton.innerText = "Edit";

    saveButton.classList.add("button");
    saveButton.classList.add("button--todo");
    saveButton.classList.add("button--save");
    saveButton.classList.add("hidden");
    saveButton.innerText = "Save";

    deleteButton.classList.add("button");
    deleteButton.classList.add("button--todo");
    deleteButton.classList.add("button--delete");
    deleteButton.innerText = "Delete";

    li.appendChild(todoTitle);
    li.appendChild(editableInput);
    li.appendChild(editButton);
    li.appendChild(saveButton);
    li.appendChild(deleteButton);
    todoCollection.appendChild(li);

    function toggleTodoEditForm() {
      if (editableInput.value=== "")
   {
    alert("You cannot enter empty value while editing");
  } 
  else
   {
      todoTitle.classList.toggle("hidden");
      editableInput.classList.toggle("hidden");
      editButton.classList.toggle("hidden");
      saveButton.classList.toggle("hidden");
    }
  }

    editButton.addEventListener("click", () => {
      toggleTodoEditForm();
      editableInput.focus();
    });

    saveButton.addEventListener("click", () => {
      todoTitle.innerText = editableInput.value;
      toggleTodoEditForm();
    });

    deleteButton.addEventListener("click", () => {
        todoCollection.removeChild(li);
    });
  }
  // clear input
//   IF we will not give below then at input place it will not be cleared.
  todoInput.value = "";
  e.preventDefault();
}
