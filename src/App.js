import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import AddTodo from "./Pages/AddToDo";

const urlEndpoint = "http://localhost:4000";

function App() {
	const [todos, setTodos] = useState([]);
	const [completedTodos, setCompletedTodos] = useState([]);

	useEffect(() => {
		fetch(`${urlEndpoint}/todos`)
			.then((res) => res.json())
			.then((data) => {
				setTodos(data.todos);
			});
	}, []);

	async function handleDelete(id) {
		await fetch(`${urlEndpoint}/todos/${id}`, {
			method: "DELETE",
		});
		setTodos(todos.filter((todo) => todo._id !== id));
	}
	async function handleComplete(id) {
		await fetch(`${urlEndpoint}/todos/${id}`, {
			method: "PUT",
		});
		setCompletedTodos(completedTodos.filter((todo) => todo.completed === true));
	}

	async function handleAdd(e) {
		e.preventDefault();
		const title = e.target.elements.title.value;
		await fetch(`${urlEndpoint}/todos`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ title }),
		});
		setTodos([...todos, { title }]);
		window.location.href = "/";
	}

	return (
		<div className="app-body">
			<nav className="app-navbar">
				<Link to="/" className="home-link">
					Home
				</Link>
				<Link to="/add" className="addtodo-link">
					Add Todo
				</Link>
			</nav>
			<Routes>
				<Route
					path="/"
					element={
						<Home
							todos={todos}
							handleDelete={handleDelete}
							handleComplete={handleComplete}
						/>
					}
				/>
				<Route path="/add" element={<AddTodo handleAdd={handleAdd} />} />
			</Routes>
		</div>
	);
}

export default App;
