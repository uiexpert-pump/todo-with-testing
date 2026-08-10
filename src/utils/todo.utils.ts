import type { Todo } from "../types/todo.types";

export function addTodo(todos: Todo[], title: string): Todo[] {
  const trimmedTitle = title.trim();

  if (!trimmedTitle) {
    return todos;
  }

  const todo: Todo = {
    id: Date.now(),
    title: trimmedTitle,
    completed: false,
  };

  return [...todos, todo];
}

export function toggleTodo(
  todos: Todo[],
  id: number,
): Todo[] {
  return todos.map((todo) =>
    todo.id === id
      ? {
          ...todo,
          completed: !todo.completed,
        }
      : todo,
  );
}

export function deleteTodo(
  todos: Todo[],
  id: number,
): Todo[] {
  return todos.filter((todo) => todo.id !== id);
}