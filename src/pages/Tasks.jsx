import { useEffect, useRef, useState } from 'react';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const inputRef = useRef(null);
  const countRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos?_limit=5'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }

        const data = await response.json();
        const formatted = data.map((todo) => ({
          id: todo.id,
          title: todo.title,
          completed: todo.completed,
        }));

        setTasks(formatted);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  useEffect(() => {
    if (countRef.current) {
      countRef.current.innerText = `Total tasks: ${tasks.length}`;
    }
  }, [tasks]);

  const handleAddTask = (event) => {
    event.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;

    const newTask = {
      id: Date.now(),
      title: trimmed,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setTitle('');
    inputRef.current?.focus();
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <section className="page tasks-page">
      <div className="page-header">
        <h1>Tasks</h1>
        <p className="subtitle">Add tasks, mark them done, keep it simple.</p>
        <p ref={countRef} className="task-count">
          Total tasks: 0
        </p>
      </div>

      <form className="task-form" onSubmit={handleAddTask}>
        <label htmlFor="task-title" className="sr-only">
          New task
        </label>
        <input
          id="task-title"
          ref={inputRef}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
          autoComplete="off"
        />
        <button type="submit">Add</button>
      </form>

      {loading && <p className="status">Loading tasks...</p>}
      {error && <p className="status error">{error}</p>}

      {!loading && !error && (
        <ul className="task-list">
          {tasks.length === 0 ? (
            <li className="empty">No tasks yet. Add one above.</li>
          ) : (
            tasks.map((task) => (
              <li key={task.id}>
                <button
                  type="button"
                  className={`task-item ${task.completed ? 'completed' : ''}`}
                  onClick={() => toggleComplete(task.id)}
                >
                  <span className="checkbox" aria-hidden="true">
                    {task.completed ? '✓' : ''}
                  </span>
                  <span className="task-title">{task.title}</span>
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </section>
  );
}

export default Tasks;
