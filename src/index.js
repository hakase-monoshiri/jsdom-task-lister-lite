document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form = document.getElementById('create-task-form');

  const tasks = document.getElementById('tasks');

  form.addEventListener("click", function (event) { 

    console.log("worked") ;

    let input = document.getElementById('new-task-description').value; 

    console.log(input);

    const li = document.createElement("li");   
    li.textContent = input;


    tasks.appendChild(li)


    event.preventDefault();
  });




});
