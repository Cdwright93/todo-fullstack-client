import "../App.css";

function ToDoCard(props) {
	return (
		<div className="card">
			<h3>{props.todo.title}</h3>
			<button
				className="delete-button"
				onClick={() => props.handleDelete(props.todo._id)}
			>
				Delete
			</button>
			<button
				className="complete-button"
				onClick={() => props.handleComplete(props.todo._id)}
			>
				Complete
			</button>
		</div>
	);
}

export default ToDoCard;
