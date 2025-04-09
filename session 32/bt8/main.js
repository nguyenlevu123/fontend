const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
addBtn.style.cssText = `
padding: 10px 20px;
font-size: 16px;
background-color: #4CAF50;
color: white;
border: none;
border-radius: 8px;
cursor: pointer;

`;

addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Vui lòng nhập nhiệm vụ!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "X";
    deleteBtn.style.color = "white";
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.style.marginLeft = "20px";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.padding = "2px 8px";
    deleteBtn.style.borderRadius = "5px";

    deleteBtn.addEventListener("click", () => {
        const confirmDelete = confirm("Bạn có chắc muốn xóa nhiệm vụ này?");
        if (confirmDelete) {
            li.remove();
        }
    });
    const editBtn = document.createElement("button")
    editBtn.textContent = " sửa"
    editBtn.style.marginLeft = "10px";
    editBtn.style.cursor = "pointer";
    editBtn.addEventListener("click", () => {
        const editText = prompt(" moi bạn nhập vào thông tin cần chỉnh sửa ")
        if (editText === "") {
            alert("Vui lòng nhập nhiệm vụ cần sửa!");
            return;
        }
        li.firstChild.textContent = editText;
    })

    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    taskList.appendChild(li);
    taskInput.value = "";
});