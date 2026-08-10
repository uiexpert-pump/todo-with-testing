import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { useTodos } from "./hooks/useTodo";

function App() {
  const { todos, createTodo, completeTodo, removeTodo } = useTodos();

  const completedCount = todos.filter((todo) => todo.completed).length;

  const activeCount = todos.length - completedCount;

  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-700">
      <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        {/* Header */}
        <header className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
            Productivity
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-300 mb-4">
            Todo Application
          </h1>

          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
            Manage your daily tasks in one place.
          </p>
        </header>

        {/* Add Todo */}
        <section
          aria-labelledby="add-todo-heading"
          className="
            rounded-xl
            border
            border-slate-200
            bg-white
            dark:bg-gray-300
            dark:border-gray-200
            p-4
            shadow-sm
            sm:p-6
          "
        >
          <h2
            id="add-todo-heading"
            className="mb-4 text-lg font-semibold text-slate-900"
          >
            Add a task
          </h2>

          <TodoForm onAdd={createTodo} />
        </section>

        {/* Statistics */}
        <section
          aria-label="Todo statistics"
          className="
            mt-6
            grid
            grid-cols-3
            gap-3
          "
        >
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-slate-900">{todos.length}</p>

            <p className="mt-1 text-xs text-slate-500 sm:text-sm">Total</p>
          </div>

          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-blue-600">{activeCount}</p>

            <p className="mt-1 text-xs text-slate-500 sm:text-sm">Active</p>
          </div>

          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-green-600">
              {completedCount}
            </p>

            <p className="mt-1 text-xs text-slate-500 sm:text-sm">Completed</p>
          </div>
        </section>

        {/* Todo List */}
        <section aria-labelledby="todo-list-heading" className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2
              id="todo-list-heading"
              className="text-lg font-semibold text-slate-900 dark:text-slate-300"
            >
              Your Tasks
            </h2>

            <span className="text-sm text-slate-500">
              {todos.length} {todos.length === 1 ? "task" : "tasks"}
            </span>
          </div>

          <TodoList
            todos={todos}
            onToggle={completeTodo}
            onDelete={removeTodo}
          />
        </section>
      </div>
    </main>
  );
}

export default App;
