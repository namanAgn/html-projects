const addTask = document.querySelector('.add-task-button');
const dialogBox = document.querySelector('.task-creation-dialog')
const createButton = document.querySelector('.create-task')
const taskListElement = document.querySelector('.tasklist')
const errorBox = document.querySelector('.error')

const priorityInput = document.querySelector('.priority-selector')
const nameInput = document.querySelector('.task-name-input')

let tasks = [];
try {
    const storedTasks = localStorage.getItem('tasks');
    tasks = storedTasks ? JSON.parse(storedTasks) : [];
} catch (error) {
    tasks = [];
}


let taskNo = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 0;

renderTasks()

function renderTasks() {
    taskListElement.innerHTML = '';

    tasks.forEach(task => {
        const newTask = document.createElement('div');
        newTask.classList.add('task');
        newTask.innerText = `${task.name} - ${task.priority}`;
    
        newTask.setAttribute('data-id', task.id);
    
        switch (task.priority) {
            case 'low':
                newTask.classList.add('low');
                break;
            case 'medium':
                newTask.classList.add('medium');
                break;
            case 'high':
                newTask.classList.add('high');
                break;
            case 'urgent':
                newTask.classList.add('urgent');
                break;
        }
    
        const Delete = document.createElement('button');
        Delete.classList.add('delete-button');
        Delete.innerText = '🗑️';
    
        Delete.addEventListener('click', () => {
            deleteTask(newTask);
        });
    
        newTask.appendChild(Delete);

        Complete = document.createElement('button')
        Complete.classList.add('complete-button')
        Complete.innerText = '✅';
        Complete.disabled = task.completed; // Disable if already completed

        Complete.addEventListener('click', () => {
            completeTask(newTask)
        })

        newTask.appendChild(Complete);
        
        /*
        MoveUp = document.createElement('button')
        MoveUp.classList.add('move-up-button')
        MoveUp.innerText = '⬆️'
    
        MoveUp.addEventListener('click', () => {
            moveUp(newTask)
        })
    
        MoveDown = document.createElement('button')
        MoveDown.classList.add('move-down-button')
        MoveDown.innerText = '⬇️'
    
        MoveDown.addEventListener('click', () => {
            moveDown(newTask)
        })
        */
        taskListElement.appendChild(newTask);   
    })
}

addTask.addEventListener('click', () => {
    dialogBox.style.display = 'block';
})

createButton.addEventListener('click', () => {
    createTask()
})

function createTask() {
    taskNo++;

    const newTaskName = nameInput.value;
    const newTaskPriority = priorityInput.value;

    if (newTaskName === '') {
        errorBox.style.display = 'block';
        errorBox.innerText = 'Please enter a task name';
        setTimeout(() => {
            errorBox.style.display = 'none';
            errorBox.innerText = '';
        }, 1500);
        return;     
    } 

    if (newTaskPriority === 'no') {  
        errorBox.innerText = 'Please enter a task priority';
        errorBox.style.display = 'block';
        setTimeout(() => {
            errorBox.style.display = 'none';
            errorBox.innerText = '';
        }, 1500);
        return;
    }

    dialogBox.style.display = 'none';

    const newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.innerText = `${newTaskName} - ${newTaskPriority}`;

    // Add a unique ID to the DOM element
    newTask.setAttribute('data-id', taskNo);

    switch (newTaskPriority) {
        case 'low':
            newTask.classList.add('low');
            break;
        case 'medium':
            newTask.classList.add('medium');
            break;
        case 'high':
            newTask.classList.add('high');
            break;
        case 'urgent':
            newTask.classList.add('urgent');
            break;
    }

    const Delete = document.createElement('button');
    Delete.classList.add('delete-button');
    Delete.innerText = '🗑️';

    // Pass the DOM element only, the ID will be retrieved from the attribute
    Delete.addEventListener('click', () => {
        deleteTask(newTask);
    });

    newTask.appendChild(Delete);

    tasks.push({
        id: taskNo,
        name: newTaskName,
        priority: newTaskPriority,
        completed: false,
        starred: false,
        pinned: false,
    });
    
    Complete = document.createElement('button')
    Complete.classList.add('complete-button')
    Complete.innerText = '✅'
    
    Complete.addEventListener('click', () => {
        completeTask(newTask)
    })
    
    newTask.appendChild(Complete);

    localStorage.setItem('tasks', JSON.stringify(tasks)) 
    renderTasks()
    
    /*
    MoveUp = document.createElement('button')
    MoveUp.classList.add('move-up-button')
    MoveUp.innerText = '⬆️'

    MoveUp.addEventListener('click', () => {
        moveUp(newTask)
    })

    MoveDown = document.createElement('button')
    MoveDown.classList.add('move-down-button')
    MoveDown.innerText = '⬇️'

    MoveDown.addEventListener('click', () => {
        moveDown(newTask)
    })
    */

    nameInput.value = '';
    priorityInput.value = 'no';
}

function deleteTask(task) {
    const taskId = parseInt(task.getAttribute('data-id'));

    const index = tasks.findIndex(task => task.id === taskId);

    if (index !== -1) {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks)) 
    }

    task.remove();

    renderTasks()
}

function completeTask(task) {
    const taskId = parseInt(task.getAttribute('data-id'));

    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex !== -1) {
        tasks[taskIndex].completed = true; // Mark task as completed
        task.classList.add('completed');
        task.querySelector('.complete-button').innerText = 'completed'
        task.innerText += '✅'
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }
}
