import './App.css';

import Adding from './components/adding/adding';
import List from './components/list/List';
import Footer from './components/footer/Footer';

import { useState } from 'react';

function App() {

  const [name, setName] = useState("");

  const [todos, setTodos] = useState([
    {
      text : "Learn JS",
      checked : false,
      id : Math.random()
    },
    {
      text : "Learn CSS",
      checked : false,
      id : Math.random()
    },
    {
      text : "Learn React",
      checked : false,
      id : Math.random()
    }
  ])

  let todosLenght = todos.length;
  let isChecked = todos.filter((todo) => todo.checked).length;

  return (
    <div className="App">
      <h1 className="title">Todo List</h1>
      <Adding 
        add={() => setTodos(
          [
            ...todos,
            {
              text : name,
              checked : false,
              id : Math.random()
            }
          ]
        )} 
        name={name} 
        setName={setName}
      />

      <List 
        todos={todos} 
        onDelete={(todo) => {
          setTodos(todos.filter((t) => t.id !== todo.id))
        }}
        changeCheckbox={(newTodo) => {
          setTodos(
            todos.map((todo) => {
            if (newTodo.id === todo.id) {
              todo.checked = !todo.checked
            }
              return todo
          }))
        }}
      />

      <Footer 
        todos={todos} 
        todosLenght={todosLenght}
        isChecked={isChecked}
        onClear={() => {
          setTodos(todos.filter((todo) => !todo.checked))
        }}
      />
    </div>
  );
}

export default App;