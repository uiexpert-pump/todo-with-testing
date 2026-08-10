import { useState } from "react";

interface TodoFormProps {
  onAdd: (title: string) => void;
}

export function TodoForm({ onAdd }: TodoFormProps) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    onAdd(trimmedTitle);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <div className="flex-1">
        <label htmlFor="todo-title" className="sr-only">
          Todo
        </label>

        <input
          id="todo-title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="What needs to be done?"
          className="
            w-full
            rounded-lg
            border
            border-slate-300
            bg-white
            px-4
            py-3
            text-slate-900
            outline-none
            transition
            placeholder:text-slate-400
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/20
          "
        />
      </div>

      <button
        type="submit"
        className="
          rounded-lg
          bg-blue-600
          px-6
          py-3
          font-medium
          text-white
          transition
          hover:bg-blue-700
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:ring-offset-2
          active:bg-blue-800
        "
      >
        Add Todo
      </button>
    </form>
  );
}
