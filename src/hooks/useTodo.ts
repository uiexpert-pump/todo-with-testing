import { useState } from "react";

import type { Todo } from "../types/todo.types";
import {
  addTodo,
  deleteTodo,
  toggleTodo,
} from "../utils/todo.utils";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const createTodo = (title: string) => {
    setTodos((currentTodos) =>
      addTodo(currentTodos, title),
    );
  };

  const completeTodo = (id: number) => {
    setTodos((currentTodos) =>
      toggleTodo(currentTodos, id),
    );
  };

  const removeTodo = (id: number) => {
    setTodos((currentTodos) =>
      deleteTodo(currentTodos, id),
    );
  };

  return {
    todos,
    createTodo,
    completeTodo,
    removeTodo,
  };
}