let students = JSON.parse(localStorage.getItem("students")) || [];

function saveStudents(){
    localStorage.setItem("students", JSON.stringify(students));
}

function displayStudents(){

    let output = "";

    students.forEach((student,index)=>{

        output += `
        <tr>

        <td>${index+1}</td>

        <td>${student.name}</td>

        <td>${student.roll}</td>

        <td>${student.course}</td>

        <td>
        <button
        class="delete"
        onclick="deleteStudent(${index})">
        Delete
        </button>
        </td>

        </tr>
        `;

    });

    document.getElementById("studentTable").innerHTML = output;

}

function addStudent(){

    let name = document.getElementById("studentName").value.trim();
    let roll = document.getElementById("rollNo").value.trim();
    let course = document.getElementById("course").value.trim();

    if(name==="" || roll==="" || course===""){
        alert("Please fill all fields.");
        return;
    }

    students.push({
        name:name,
        roll:roll,
        course:course
    });

    saveStudents();
    displayStudents();

    document.getElementById("studentName").value="";
    document.getElementById("rollNo").value="";
    document.getElementById("course").value="";
}

function deleteStudent(index){

    if(confirm("Delete this student?")){
        students.splice(index,1);
        saveStudents();
        displayStudents();
    }

}

function searchStudent(){

    let search = document.getElementById("search").value.toLowerCase();

    let rows = document.querySelectorAll("#studentTable tr");

    rows.forEach(row=>{

        row.style.display =
        row.innerText.toLowerCase().includes(search)
        ? ""
        : "none";

    });

}

displayStudents();
