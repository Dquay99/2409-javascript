let initData = localStorage.getItem("students") ? JSON.parse(localStorage.getItem("students")) : [];

// const ListStudent = [
//     {
//         id: 1,
//         name: "Anh",
//         gender: "Nam",
//         MathScore: "8",
//         EnglishScore: "6",
//         LiteratureScore: "10",
//     },
//     {
//         id: 2,
//         name: "Yến",
//         gender: "Nữ",
//         MathScore: "8",
//         EnglishScore: "8",
//         LiteratureScore: "10",
//     },
//     {
//         id: 3,
//         name: "Nguyệt",
//         gender: "Nữ",
//         MathScore: "8",
//         EnglishScore: "10",
//         LiteratureScore: "10",
//     },
//     {
//         id: 4,
//         name: "Hà",
//         gender: "Nam",
//         MathScore: "8",
//         EnglishScore: "8",
//         LiteratureScore: "10",
//     },
//     {
//         id: 5,
//         name: "Đức",
//         gender: "Nam",
//         MathScore: "8",
//         EnglishScore: "6",
//         LiteratureScore: "10",
//     }
// ]

const tbodyValue = document.getElementById('tbodylist');
const nameValue = document.getElementById('name').value;
const gender = document.querySelector('input[name="Gender"]:checked').value;
const mathScore = parseFloat(document.getElementById('math').value);
const englishScore = parseFloat(document.getElementById('english').value);
const literatureScore = parseFloat(document.getElementById('literature').value);

function displayList() {
    tbodyValue.innerHTML = '';
    initData.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.nameValue}</td>
                <td>${student.gender}</td>
                <td>${student.mathScore}</td>
                <td>${student.englishScore}</td>
                <td>${student.literatureScore}</td>
                <td>${parseInt(student.mathScore) + parseInt(student.englishScore) + parseInt(student.literatureScore) / 3}</td>
                <td>
                    <button onclick="editStudent(${index})">Sửa</button>
                    <button onclick="deleteStudent(${index})">Xóa</button>
                </td>            
    `;
        tbodyValue.appendChild(row);
    });
};
displayList();

function createStudent() {
    const id = initData.length ? initData[initData.length - 1].id + 1 : 1;
    const student = {
        id, nameValue, gender, mathScore, englishScore, literatureScore,
        averageScore: ((mathScore + englishScore + literatureScore) / 3).toFixed(2)

    };
    initData.push(student);
    localStorage.setItem("student", JSON.stringify(initData));
    displayList(initData);
};

function deleteStudent(index) {
    initData.splice(index, 1);
    localStorage.setItem("student", JSON.stringify(initData));
    displayList();
};

function updateStudent(index) {



}

