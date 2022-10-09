interface Todo {
  title: string;
  description: string;
  done: boolean;
}
 
function updateTodo(todo: Todo, fieldsToUpdate: Todo) {
  return { ...todo, ...fieldsToUpdate };
}

const todo: Todo = {
  title: 'Present',
  description: 'Present at the conference',
  done: false,
}
 
// updateTodo(todo, { done: true });