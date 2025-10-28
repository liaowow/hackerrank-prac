import { useReducer, useState } from "react";
import "./App.css";

function reducer(todos, action) {
  switch (action.type) {
    case "CREATE_TODO": {
      return [
        ...todos,
        {
          label: action.label,
          id: crypto.randomUUID(),
          completed: false,
        }
      ];
    }
    case "TOGGLE_TODO": {
      return todos.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    }
    default: {
      return todos;
    }
  }
}

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, dispatch] = useReducer(reducer, [
    {
      label: "Thing to be done",
      id: crypto.randomUUID(),
      completed: false,
    },
  ]);

  const handleCreateTodo = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE_TODO",
      label: newTodo,
    });
    setNewTodo('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleCreateTodo}>
          <label htmlFor="todo-input">Classic To Do</label>
          <input
            id="todo-input"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </form>
        <ul>
          {todos.map(({label, id, completed}) => (
            <li key={id}>
              <input
                type="checkbox"
                id={id}
                checked={completed}
                onChange={() => dispatch({ type: 'TOGGLE_TODO', id, })}
              />
              <label htmlFor={id}>{label}</label>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
