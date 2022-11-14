import "../App.css";
import { Link } from "react-router-dom";

function AddTodo(props) {
	return (
		<div className="app-body">
			<h1 className="add-todo-h1">Add Todo</h1>
			<form onSubmit={props.handleAdd} className="todo-form">
				<label htmlFor="title" className="form-label">
					Todo:
				</label>
				<input type="text" name="title" className="form-input" />
				<button type="submit" className="complete-button">
					Add
				</button>
			</form>
			<Link to="/" className="back-button">
				Back
			</Link>
		</div>
	);
}
export default AddTodo;
