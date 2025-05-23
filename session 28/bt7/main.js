let students = [
    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },
    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },
    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } }
];

function cosntstudent(students) {
    let result = [];

    students.forEach(student => {
        let { math, english, literature } = student.scores;
        let average = (math + english + literature) / 3;

        if (average >= 8) {
            result.push(student);
        }
    });

    return result;
}

console.log(cosntstudent(students));
