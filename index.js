//https://awesome-todo-api.herokuapp.com/tasks

/*
    1. Göra ett fetch-anrop mot awesome-todo-api och hämta todos
    2. För varje todo i array:en
        1. Skapa upp ett element
        2. Lägg till todo-text i elementet
        3. Lägg till elementet i DOM:en

*/

const todosWrapperElem = document.getElementById('todos');

function displayTodos(todos) {
    for (todo of todos) {
        console.log('Todo: ', todo);
        const todoElem = document.createElement('li');
        todoElem.innerHTML = todo.task;
        console.log(todoElem);
        todosWrapperElem.append(todoElem);

        todoElem.addEventListener('click', (event) => {
            console.log(event);
            event.target.classList.toggle('done');
            console.log('Classlist: ', event.target.classList);
        });
    }

    /*for(let i = 0; i < todos.length; i++) {
        console.log(todos[i]);
    }*/
}

async function getTodos() {
    /*fetch('https://awesome-todo-api.herokuapp.com/tasks')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))*/

    const response = await fetch('https://awesome-todo-api.herokuapp.com/tasks');
    const data = await response.json();
    displayTodos(data)
}

getTodos();