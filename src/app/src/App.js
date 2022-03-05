import React, {useEffect, useState} from "react";

import './App.css';
import logo from './logo.svg';
//import TodoList from "./TodoList";

import Todo from './Todo'
import AddTodo from "./AddTodo";
import axios from "axios";


export function App() {
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')
  const getTodos = async () => {
		try {
			  const response = await axios.get('/todos')
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
			newTodo = ["name:", title]
			await axios.post('/todos', newTodo)
			getTodos()
		} catch (err) {
			console.log(err)
		}
	}
  return (
    <div className="App">
      <div>
        <h1>List of TODOs</h1>
        <li>Learn Docker</li>
        <li>Learn React</li>

        {todos.task_list.map((todo,index) =>(
          <Todo name={todo}/>
        ))}
      </div>
      <div>
        <h1>Create a ToDo</h1>
        <form>
          <div>
            <label for="todo">ToDo: </label>
            <input type="text" placeholder='Enter Todo Title' onChange={e => setTitle(e.target.value)} />
          </div>
          <div style={{"marginTop": "5px"}}>
            <button type='submit' onClick={addTodo}>Add ToDo!</button>
          </div>
        </form>
      </div>
    </div>
  );
// const [todos, setTodos] = useState([])
//     useEffect(() => {
//      axios.get('https://localhost:8000')
//             .then(res => {
//                 setTodos(res.data)
//             })
//     }, [])

//     const addTodo = (id) => {
//         axios.post('https://localhost:8000',{name: name})
//             .then(res => {
//                 setTodos(prevState => [...prevState, res.data]);
//             })
//     }

//     return (
//         <div>
//             <TodoList todos={todos} />
//             <hr/>
//             <AddTodo onAddTodo={(name) => addTodo(name)}/>
//         </div>
//     );
 }
export default App;
