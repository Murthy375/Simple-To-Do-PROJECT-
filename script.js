let btn = document.querySelector("button")
let container = document.querySelector(".container")

// on clicking task will be added to the todo list
btn.addEventListener("click", () => {
    let ip = document.querySelector("input"); 
    let task = ip.value;

    if (task != "") {
        taskMaker(task);
    }

    ip.value = "";
    ip.placeholder = "write any task...";
});

// creates new tasks
function taskMaker(task) {
    // creates a holder for task, edit btn and delete btn
    let newItem = document.createElement('div');
    newItem.className = "task-item";
    container.appendChild(newItem);
    
    // creates a task and puts it in holder
    let newTask = document.createElement("li");
    newTask.className = "new-task";
    newTask.appendChild(document.createTextNode(task));
    newItem.appendChild(newTask);
    
    // edit btn added to holder
    let editBtn = setEditor(newItem);
    toEdit(editBtn, task, newTask, newItem);

    // delete btn added to holder
    let delBtn = setDelete(newItem); 
    toDelete(newItem, delBtn); // op : deletes the task
};

// makes the edit button inside the newItem holder
function setEditor(newItem) {
    let editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.innerHTML = "<i class='ri-pencil-fill'></i>";
    newItem.appendChild(editBtn);
    return editBtn;
}

function toEdit(editBtn, task, newTask, newItem) {
    editBtn.addEventListener("click", () => {
        // blur effect bg
        let editBg = document.createElement("div");
        editBg.className = "edit-bg";
        document.body.appendChild(editBg);

        // edit dialouge box
        let editBox = document.createElement("div");
        editBox.className = "edit-box";
        editBg.appendChild(editBox); 
        
        // edit nav + buttons
        let nav = document.createElement("div");
        nav.className = "edit-nav";
        nav.appendChild(document.createTextNode("Edit Task"))
        editBox.appendChild(nav);
        
        // both the ok and close buttons
        let editButtonsBox = document.createElement("div");
        editButtonsBox.className = "edit-buttons-box";
        nav.appendChild(editButtonsBox);
        
        // ok
        let okBtn = document.createElement("button");
        okBtn.className = "nav-buttons";
        okBtn.id = "ok-button";
        okBtn.innerHTML = "<i class='ri-checkbox-circle-fill'></i>";
        editButtonsBox.appendChild(okBtn)
        
        // added input to edit box
        let editIp = document.createElement("input");
        editIp.className = "edit-ip";
        editIp.value = task;
        editIp.placeholder = "New task...";
        editBox.appendChild(editIp);
        // on clicking the ok button (whith edge cases)
        okBtn.addEventListener("click", () => {
            newTask.innerHTML = "";
            task = editIp.value
            if(task != "") {
                newTask.appendChild(document.createTextNode(task));
                editBg.remove();
            } else {
                editIp.placeholder = "You need to do some task!"
            }
        });

         // close btn
        let closeBtn = document.createElement("button");
        closeBtn.className = "nav-buttons";
        closeBtn.id = "close-button";
        closeBtn.innerHTML ="<i class='ri-close-circle-fill'></i>";
        editButtonsBox.appendChild(closeBtn);
        // on clicking the closed button
        closeBtn.addEventListener("click", () => {
            if(editIp.value === "") {
                editBg.remove();
                newItem.remove();
            }
            editBg.remove();
        });
        
    });
}

// makes the delete button inside the newItem holder
function setDelete(newItem) {
    let delBtn = document.createElement("button");
    delBtn.className = "del-btn";
    delBtn.innerHTML = "<i class='ri-delete-bin-7-fill'></i>";
    newItem.append(delBtn);
    return delBtn;
}

// deletes the task
function toDelete(newItem, delBtn) {
    delBtn.addEventListener("click", () => {
        newItem.remove();
    });
}

