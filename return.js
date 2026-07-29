let issued = JSON.parse(localStorage.getItem("issued")) || [];
let returned = JSON.parse(localStorage.getItem("returned")) || [];

function displayBooks(){

let html="";

issued.forEach((book,index)=>{

html += `

<tr>

<td>${index+1}</td>

<td>${book.student}</td>

<td>${book.book}</td>

<td>${book.date}</td>

<td>

<button onclick="returnBook(${index})">

Return

</button>

</td>

</tr>

`;

});

document.getElementById("returnTable").innerHTML = html;

}

function returnBook(index){

returned.push(issued[index]);

issued.splice(index,1);

localStorage.setItem("issued",JSON.stringify(issued));

localStorage.setItem("returned",JSON.stringify(returned));

displayBooks();

alert("Book Returned Successfully!");

}

displayBooks();
