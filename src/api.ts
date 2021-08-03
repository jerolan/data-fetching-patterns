const db: Array<Todo> = [
  {
    id: uuid(),
    text: "Make react app",
    completed: true,
  },
  {
    id: uuid(),
    text: "Make data fetcher",
    completed: false,
  },
];

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export async function getTodos() {
  return db;
}

export async function addTodo(text: string) {
  const todo = {
    id: uuid(),
    text,
    completed: false,
  };

  db.push(todo);
  return todo;
}

export async function updateTodo(id: string, text: string) {
  const todo = db.find((t) => t.id === id);
  if (todo == null) {
    throw new Error(`Todo with id ${id} not found`);
  }

  todo.text = text;
  return todo;
}

export async function deleteTodo(id: string) {
  const todo = db.find((t) => t.id === id);
  if (todo == null) {
    throw new Error(`Todo with id ${id} not found`);
  }

  db.splice(db.indexOf(todo), 1);
}

function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
