
import './App.css';
import React from "react"

function App() {
  // const apiKey = 'PPacgVuugv5uNHsIBRcQi3RE7Vd4z7p6v4UZBuOv';
  const [todos, setTodos] = React.useState([])
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => {
        setTodos(data);

      })
      .catch(error => console.error('Error fetching todos -:- ', error));
  }, []);
  let trueTodos = todos.filter(todo => todo.completed === true)


  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <ul style={{ listStyle: "none" }}>{trueTodos.map((todo, id) => <li key={todo.id} style={{ textAlign: 'left', width: '40vw', padding: '20px' }}>
        <span style={{ marginRight: '20px' }}>ID-{todo.id}</span>
        <span style={{ color: 'blue', fontStyle: 'italic' }} >{todo.title}</span>
      </li>
      )}</ul>
    </div>
  );
}

export default App;
