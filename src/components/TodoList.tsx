import type { Todo } from "../types/todo.types";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div
        className="
          rounded-lg
          border
          border-dashed
          border-slate-300
          bg-slate-50
          px-6
          py-10
          text-center
        "
      >
        <p className="text-sm text-slate-500">No todos available.</p>

        <p className="mt-1 text-xs text-slate-400">
          Add a task above to get started.
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-3" aria-label="Todo list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
