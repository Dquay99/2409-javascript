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

function createStudent() {
    const nameValue = document.getElementById('name');
    const gender = document.querySelector('input[name="Gender"]:checked');
    const mathScore = document.getElementById('math');
    const englishScore = document.getElementById('english');
    const literatureScore = document.getElementById('literature');
    const id = initData.length ? initData[initData.length - 1].id + 1 : 1;
    const averageScore = ((parseFloat(mathScore.value) + parseFloat(englishScore.value) + parseFloat(literatureScore.value)) / 3).toFixed(2)
    const student = {
        id,
        nameValue: nameValue.value,
        gender: gender.value,
        mathScore: parseFloat(mathScore.value),
        englishScore: parseFloat(englishScore.value),
        literatureScore: parseFloat(literatureScore.value),
        averageScore
    };

    initData.push(student);
    localStorage.setItem("students", JSON.stringify(initData));
    displayList(initData);
    clearData(nameValue, gender, mathScore, englishScore, literatureScore);
}

const clearData = (nameInput, genderInput, mathScoreInput, englishScoreInput, literatureScoreInput) => {
    nameInput.value = "";
    genderInput.checked = false;
    mathScoreInput.value = "";
    englishScoreInput.value = "";
    literatureScoreInput.value = "";
}

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
                <td>${student.averageScore}</td>
                <td>
                    <button onclick="updateStudent(${student.id})">Sửa</button>
                    <button onclick="deleteStudent(${index})">Xóa</button>
                </td>            
    `;
        tbodyValue.appendChild(row);
    });
}

function deleteStudent(index) {
    initData.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(initData));
    displayList();
};

// khi đã lấy ra đc student muốn sửa => gán lại các giá trị trong input  => hiện thị lại (gọi hàm display) => cập nhật giá trị mới => lưu lại lên local
function updateStudent(idStudent) {
    const nameValue = document.getElementById('name');
    const gender = document.querySelector('input[name="Gender"]:checked');
    const mathScore = document.getElementById('math');
    const englishScore = document.getElementById('english');
    const literatureScore = document.getElementById('literature');

    const studentData = JSON.parse(localStorage.getItem('student'));
    for(let i of studentData){
    if(idStudent === i.id ){
        nameValue.value = i.nameValue
        mathScore.value = i.mathScore
        englishScore.value = i.englishScore
        literatureScore.value = i.literatureScore
    }
    }

}

displayList();