let books = JSON.parse(localStorage.getItem("books")) || [];

function saveBooks(){
localStorage.setItem("books",JSON.stringify(books));
}

function displayBooks(){

let table="";

books.forEach((book,index)=>{

table+=`

<tr>

<td>${index+1}</td>

<td>${book.name}</td>

<td>${book.author}</td>

<td>${book.category}</td>

<td>${book.quantity}</td>

<td>

<button
class="delete"
onclick="deleteBook(${index})">

Delete

</button>

</td>

</tr>

`;

});

document.getElementById("bookTable").innerHTML=table;

}

function addBook(){

let name=document.getElementById("bookName").value;

let author=document.getElementById("author").value;

let category=document.getElementById("category").value;

let quantity=document.getElementById("quantity").value;

if(name==""||author==""||category==""||quantity==""){

alert("Fill all fields");

return;

}

books.push({

name,

author,

category,

quantity

});

saveBooks();

displayBooks();

document.getElementById("bookName").value="";
document.getElementById("author").value="";
document.getElementById("category").value="";
document.getElementById("quantity").value="";

}

function deleteBook(index){

books.splice(index,1);

saveBooks();

displayBooks();

}

function searchBook(){

let input=document.getElementById("search").value.toLowerCase();

let rows=document.querySelectorAll("#bookTable tr");

rows.forEach(row=>{

let text=row.innerText.toLowerCase();

row.style.display=text.includes(input)?"":"none";

});

}

displayBooks();
