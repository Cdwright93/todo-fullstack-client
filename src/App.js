import { useState, useEffect } from "react";
import "./App.css";

const urlEndpoint = "http://localhost:4000";

function App() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const fetchTodos = async () => {
			const response = await fetch(`${urlEndpoint}/todos`);
			const data = await response.json();
			console.log(data);
			const fetchedTodos = data.todos;
			setTodos(fetchedTodos);
		};
		fetchTodos();
	}, []);

	const addTodo = async (e) => {
		if (e.key === "Enter") {
			const result = await fetch(`${urlEndpoint}/todos/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ title: e.target.value }),
			});
      const newTodo = await result.json();
			setTodos([...todos, newTodo]);
			e.target.value = "";
		}
	};
	const deleteTodo = async (id) => {
		const result = await fetch(`${urlEndpoint}/todos/${id}`, {
			method: "DELETE",
		});
		const data = await result.json();
		console.log(data);
		const newTodos = todos.filter((todo) => todo._id !== id);
		setTodos(newTodos);
	};

	return (
		<div className="App">
			<h1>Todo List</h1>
			<input type="text" placeholder="Add Todo" onKeyPress={addTodo} />
			<ul className="todo-list">
				{todos.map((todo) => (
					<li key={todo._id}>
						{todo.title}
						<button onClick={() => deleteTodo(todo._id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
