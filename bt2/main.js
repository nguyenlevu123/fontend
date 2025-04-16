let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let editId = null;

function render() {
  const tbody = document.getElementById('taskTable');
  tbody.innerHTML = tasks.map((t, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${t.content}</td>
      <td>${t.dueDate}</td>
      <td>${t.status}</td>
      <td>${t.assignedTo}</td>
      <td>
        <button class="btn btn-sm btn-warning" onclick="editTask(${t.id})">Sửa</button>
        <button class="btn btn-sm btn-danger" onclick="deleteTask(${t.id})">Xóa</button>
      </td>
    </tr>
  `).join('');
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
  const content = document.getElementById('content').value;
  const dueDate = document.getElementById('dueDate').value;
  const status = document.getElementById('status').value;
  const assignedTo = document.getElementById('assignedTo').value;

  if (!content || !dueDate || !status || !assignedTo) return alert('Điền đầy đủ');

  if (editId) {
    let t = tasks.find(t => t.id === editId);
    Object.assign(t, { content, dueDate, status, assignedTo });
    editId = null;
  } else {
    tasks.push({ id: Date.now(), content, dueDate, status, assignedTo });
  }

  clearForm();
  render();
}

function editTask(id) {
  const t = tasks.find(t => t.id === id);
  document.getElementById('content').value = t.content;
  document.getElementById('dueDate').value = t.dueDate;
  document.getElementById('status').value = t.status;
  document.getElementById('assignedTo').value = t.assignedTo;
  editId = id;
}

function deleteTask(id) {
  if (confirm('Xóa task này?')) {
    tasks = tasks.filter(t => t.id !== id);
    render();
  }
}

function clearForm() {
  document.getElementById('content').value = '';
  document.getElementById('dueDate').value = '';
  document.getElementById('status').value = '';
  document.getElementById('assignedTo').value = '';
}

render();
