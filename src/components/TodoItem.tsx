import type { Todo } from "../types/todo.types";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TodoItem({
  todo,
  onToggle,
  onDelete,
}: TodoItemProps) {
  return (
    <li
      className="
        flex
        flex-col
        gap-3
        rounded-lg
        border
        border-slate-200
        bg-white
        p-4
        shadow-sm
        transition
        hover:shadow-md
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={() => onToggle(todo.id)}
          aria-label={
            todo.completed
              ? `Mark ${todo.title} incomplete`
              : `Complete ${todo.title}`
          }
          className={`
            flex
            h-6
            w-6
            shrink-0
            items-center
            justify-center
            rounded-full
            border-2
            transition
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:ring-offset-2
            ${
              todo.completed
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-slate-300 bg-white hover:border-blue-500"
            }
          `}
        >
          {todo.completed && (
            <span
              aria-hidden="true"
              className="text-xs"
            >
              ✓
            </span>
          )}
        </button>

        <span
          className={`
            min-w-0
            break-words
            text-sm
            sm:text-base
            ${
              todo.completed
                ? "text-slate-400 line-through"
                : "text-slate-700"
            }
          `}
        >
          {todo.title}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onDelete(todo.id)}
        className="
          self-end
          text-sm
          font-medium
          text-red-600
          transition
          hover:text-red-700
          focus:outline-none
          focus:ring-2
          focus:ring-red-500
          focus:ring-offset-2
          sm:self-auto
        "
      >
        Delete
      </button>
    </li>
  );
}