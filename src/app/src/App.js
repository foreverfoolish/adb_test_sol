import React, {useEffect, useState} from "react";
import InitialList from "./Components/InitialList";

import './App.css';
import logo from './logo.svg';
//import TodoList from "./TodoList";

import Todo from './Components/Todo.js'         //import Todo component
import axios from "axios";        //import axios library


export function App() {
  const [todos, setTodos] = useState([])        //define React useState hook getTodos function
  const [title, setTitle] = useState('')        //define React useState hook addTodo function
  const getTodos = async () => {
		try {
			  const response = await axios.get('http://localhost:8000/todos')      //getTodo function makes a get request and calls setTodos (react hook)
			  const { data } = response
			  setTodos(data)
		} catch (err) {
			  console.log(err)
		}
	}
  useEffect(() => {
    getTodos()
  },[])

  const addTodo = async newTodo => {
		try {
			// POST request using fetch
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name : title})
    };
    fetch('http://localhost:8000/todos/', requestOptions)
        .then(response => response.json())
			getTodos()
		} catch (err) {
			console.log(err)
		}
	}
  return (
    <div className="App">
      <InitialList/>
      <div> 
        {/*iterate over the elements in todo (which contains the items array) and use react prop to send the data to Todo compnent*/}                   
        {todos.map((todo,index) =>(
          <Todo id = {index} name={todo}/>
        ))}
      </div>
      <div>
        <h1>Create a ToDo</h1>          
        <form>
          <div>
            <label form="todo">ToDo: </label>
            <input type="text" placeholder='Enter Todo Title' onChange={e => setTitle(e.target.value)} />
          </div>
          <div style={{"marginTop": "5px"}}>
            <button type='submit' onClick={addTodo}>Add ToDo!</button>
          </div>
        </form>
      </div>
    </div>
  );
 }
export default App;
