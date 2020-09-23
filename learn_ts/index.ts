interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/2';

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  const ID = todo.id;
  const title = todo.title;
  const finished = todo.completed;
  logTodo(ID, title, finished);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    ID is : ${id}
    Title is : ${title}
    Finished is : ${completed}
  `);
};
