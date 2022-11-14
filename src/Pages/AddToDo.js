import "../App.css";
import { Link } from "react-router-dom";

function AddTodo(props) {
	return (
		<div className="app-body">
			<h1>Add Todo</h1>
			<form onSubmit={props.handleAdd}>
				<label htmlFor="title">Title</label>
				<input type="text" name="title" />
				<button type="submit">Add</button>
			</form>
			<Link to="/">Back</Link>
		</div>
	);
}
export default AddTodo;
