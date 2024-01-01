const addList = document.getElementById("task-list");
const taskInput = document.getElementById("task_input");

function addTask(){
    if(taskInput.value === ''){
        alert("enter something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        addList.appendChild(li);

    }

    taskInput.value="";
}