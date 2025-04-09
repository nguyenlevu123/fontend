
let tasks = [
    { id: 1, name: "học dom js" },
    { id: 2, name: "làm bài tập dom js" }
  ];
  function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Xóa nội dung cũ
  
    tasks.forEach(task => {
      const taskDiv = document.createElement("div");
      taskDiv.className = "task";
      taskDiv.innerHTML = `
        <span>${task.name}</span>
        <button class="delete-btn" onclick="deleteTask(${task.id})">X</button>`;
      taskList.appendChild(taskDiv);
    });
  }
  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskName = taskInput.value.trim();
  
    if (taskName) {
      const newTask = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1, 
        name: taskName
      };
      tasks.push(newTask);
      taskInput.value = ""; 
      renderTasks(); 
    } else {
      alert("Vui lòng nhập nhiệm vụ!");
    }
  }
  function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId); 
    renderTasks(); 
  }
  renderTasks();