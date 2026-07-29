let students = JSON.parse(localStorage.getItem("students")) || [];
let books = JSON.parse(localStorage.getItem("books")) || [];
let issued = JSON.parse(localStorage.getItem("issued")) || [];

const studentSelect = document.getElementById("student");
const bookSelect = document.getElementById("book");

students.forEach(student=>{
    studentSelect.innerHTML += `
    <option>${student.name}</option>
    `;
});

books.forEach(book=>{
    bookSelect.innerHTML += `
    <option>${book.name}</option>
    `;
});

function displayIssued(){

let output="";

issued.forEach((item,index)=>{

output+=`

<tr>

<td>${index+1}</td>

<td>${item.student}</td>

<td>${item.book}</td>

<td>${item.date}</td>

<td>Issued</td>

</tr>

`;

});

document.getElementById("issueTable").innerHTML=output;

}

function issueBook(){

let student=studentSelect.value;
let book=bookSelect.value;
let date=document.getElementById("issueDate").value;

if(date==""){
alert("Select issue date");
return;
}

issued.push({
student,
book,
date
});

localStorage.setItem("issued",JSON.stringify(issued));

displayIssued();

document.getElementById("issueDate").value="";

alert("Book Issued Successfully");

}

displayIssued();
