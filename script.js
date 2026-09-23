 function addTask(){
            let task=document.getElementById("task").value;
            if(task==""){
                alert("Please enter a task");
                return;
            }
            let li=document.createElement("li");
            li.innerHTML=task;
            let editButton =document.createElement("Button");
            editButton.innerHTML="Edit";
            editButton.className="edit";
            editButton.onclick=function(){
                let newTask=prompt("Edit your task",task);
                if(newTask!=""){
                    li.firstChild.textContent=newTask;
                    task=newTask;
                }
            };
            let deleteButton=document.createElement("button");
            deleteButton.innerHTML="Delete";
            deleteButton.className="delete";
            deleteButton.onclick=function(){
                li.remove();
            };
            li.appendChild(editButton);
            li.appendChild(deleteButton);
            document.getElementById("list").appendChild(li);
            document.getElementById("task"),value=" ";

        }