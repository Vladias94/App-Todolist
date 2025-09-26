const Input = document.getElementById("taskInput");
const List = document.getElementById("taskList");
const ButtonAdd = document.getElementById("btnAdd");

function createElement() {
    const taskText = Input.value.trim();
    if (taskText === "") return;
	
    const li = document.createElement("li");
    let span = document.createElement("span");
	span.textContent = taskText;



    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
	editBtn.style.backgroundColor = "orange";
	editBtn.addEventListener("click", () => {
		editClick(span, li)
	});


    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
	deleteBtn.style.backgroundColor = "red";
	deleteBtn.addEventListener("click", () => {
		li.remove()
	});


    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    List.appendChild(li);
    Input.value = "";

	function editClick(span, li) {
		// Создаем input для редактирования
		const inputEdit = document.createElement("input");
		inputEdit.type = "text";
		inputEdit.value = span.textContent;
		
		// Заменяем span на input
		li.replaceChild(inputEdit, span);
		inputEdit.focus();
		
		// Функция сохранения изменений
		function saveEdit() {
			if (inputEdit.value.trim() !== "") {
				span.textContent = inputEdit.value.trim();
			}
			li.replaceChild(span, inputEdit);
		}
		
		// Сохраняем изменения при потере фокуса или нажатии Enter
		inputEdit.addEventListener("blur", saveEdit);
		inputEdit.addEventListener("keypress", function(event) {
			if (event.key === "Enter") {
				saveEdit();
			}
		});
	}
}

ButtonAdd.addEventListener("click", createElement);



