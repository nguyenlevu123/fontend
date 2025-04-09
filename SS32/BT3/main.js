const subjectInput = document.getElementById('subjectInput');
const addSubjectBtn = document.getElementById('addSubjectBtn');
const subjectList = document.getElementById('subjectList');

addSubjectBtn.addEventListener('click', function() {
    const subjectName = subjectInput.value.trim();
    if (subjectName === '') {
        alert('Tên môn học không được để trống!');
        return;
    }
    const orderNumber = subjectList.children.length + 1;
    const newSubject = document.createElement('li');
    newSubject.textContent = `${orderNumber}. ${subjectName}`;
    subjectList.appendChild(newSubject);
    subjectInput.value = '';
});