// Create a empty array to store the names here 
let list = [];



function addName(){

let inputVal = document.getElementById("nameInput").value;
list.push(inputVal);

 list.forEach(element => {
 document.getElementById("namesList").innerHTML += "<li>" + element + "</li>";

 });

console.log(list);

};



function deleteList(){

list.pop();

let remover = document.getElementById("namesList");
remover.removeChild(remover.lastChild);
console.log(list);

}






// create a function that can add names to the array and print it in the list here 




// create a function that can remove the last name from the array and print it in the list here 






