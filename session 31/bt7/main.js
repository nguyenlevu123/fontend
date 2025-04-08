let todolist = [{
    id: 1,
    task: "Hit the gym",
    completed: false
},
{
    id: 2,
    task: "Pay bills",
    completed: true
},
{
    id: 3,
    task: "Meet george",
    completed: false
},
{
    id: 4,
    task: "Buy eggs",
    completed: false
},
{
    id: 5,
    task: "Read a book",
    completed: false
},
{
    id: 6,
    task: "Organize office",
    completed: false
},
];


const ul = document.getElementById("myUL");

todolist.forEach(item => {
const li = document.createElement("li");
li.textContent = item.task;

if (item.completed) {
    li.classList.add("checked");
}

const span = document.createElement("span");
span.textContent = "X";
span.className = "close";
li.appendChild(span);

ul.appendChild(li);
});