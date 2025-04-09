const employees =[
    {
        id:1,
        name: "John",
        age: 18,
        ad: "New York"
    },
    {
        id:2,
        name: "Mike",
        age: 22,
        ad: "Canada"
    },
    {
        id:3,
        name: "Linda",
        age: 19,
        ad: "California"
    },
    {
        id:4,
        name: "Peter",
        age: 25,
        ad: "London"
    },
    {
        id:5,
        name: "Tony",
        age: 17,
        ad: "New York"
    },
];

const displayEmployess = (employees) => {
    let tbody = document.getElementById("list");
    let html = "";
    employees.forEach((stu,index) => {
        html += ` <tr>
                <td>${stu.id}</td>
                <td>${stu.name}</td>
                <td>${stu.age}</td>
                <td>${stu.ad}</td>
            
            </tr>`;
    })
    tbody.innerHTML = html;
}
displayEmployess(employees);