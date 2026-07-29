let totalBooks = JSON.parse(localStorage.getItem("books")) || [];
let totalStudents = JSON.parse(localStorage.getItem("students")) || [];
let issuedBooks = JSON.parse(localStorage.getItem("issued")) || [];
let returnedBooks = JSON.parse(localStorage.getItem("returned")) || [];

document.getElementById("books").innerHTML = totalBooks.length;
document.getElementById("students").innerHTML = totalStudents.length;
document.getElementById("issued").innerHTML = issuedBooks.length;
document.getElementById("returned").innerHTML = returnedBooks.length;
