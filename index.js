//https://awesome-todo-api.herokuapp.com/tasks

/*
    Hämta todos

    1. Göra ett fetch-anrop mot awesome-todo-api och hämta todos
    2. För varje todo i array:en
        1. Skapa upp ett element
        2. Lägg till todo-text i elementet
        3. Lägg till elementet i DOM:en


    Lägg till ny todo

    1. Lägg till ett inputfält och en knapp med en event listener
    2. När jag klickar på knappen så:
        1. Hämta värdet från inputfältet och spara i en variabel
        2. Gör ett fetch-anrop och skicka med texten i body som ett POST-anrop
        3. Hämta alla todos igen (se Hämta todos ovan)
*/

const todosWrapperElem = document.getElementById('todos');
const addTodoButton = document.getElementById('add-todo');
const todoInput = document.getElementById('todo');

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

async function postTodo(todo) {
    console.log('Todo att posta: ', todo);

    //Objekt att skicka med i fetch, hur det ska se ut står i API-dokumentationen
    const objToSend = {
        task: todo
    }

    console.log('Objekt att posta: ', objToSend);
    const response = await fetch('https://awesome-todo-api.herokuapp.com/tasks',
    { method: 'POST', 
      body: JSON.stringify(objToSend),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    displayTodos(data);
}

addTodoButton.addEventListener('click', () => {
    const todoToAdd = todoInput.value;
    console.log('Text från inputfält: ', todoToAdd);
    postTodo(todoToAdd);
});

getTodos();