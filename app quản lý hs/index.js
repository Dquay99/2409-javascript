const ListStudent = [
    {
        id:1,
        name:"Anh",
        gender:"Nam",
        MathScore:"8",
        EnglishScore:"6",
        LiteratureScore:"10",
    },
    {
        id:2,
        name:"Yến",
        gender:"Nữ",
        MathScore:"8",
        EnglishScore:"8",
        LiteratureScore:"10",
    },
    {
        id:3,
        name:"Nguyệt",
        gender:"Nữ",
        MathScore:"8",
        EnglishScore:"10",
        LiteratureScore:"10",
    },
    {
        id:4,
        name:"Hà",
        gender:"Nam",
        MathScore:"8",
        EnglishScore:"8",
        LiteratureScore:"10",
    },
    {
        id:5,
        name:"Đức",
        gender:"Nam",
        MathScore:"8",
        EnglishScore:"6",
        LiteratureScore:"10",
    }
]

const tbodyValue = document.getElementById('tbodylist');

(function displayList(){
ListStudent.forEach(student => {
    const row = document.createElement('tr');
    row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.gender}</td>
                <td>${student.MathScore}</td>
                <td>${student.EnglishScore}</td>
                <td>${student.LiteratureScore}</td>
                <td>${parseInt(student.MathScore) + parseInt(student.EnglishScore) + parseInt(student.LiteratureScore)/3}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>            
    `;
    tbodyValue.appendChild(row);
})();
})();

