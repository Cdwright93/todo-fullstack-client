import "../App.css";
import { Link } from "react-router-dom";
import ToDoCard from "../Components/ToDoCard";

function Home(props) {
	return (
		<div className="app-body">
			<h1>Todo List</h1>
			<Link to="/add">Add Todo</Link>
			{props.todos.map((todo) => (
				<ToDoCard
					key={todo._id}
					todo={todo}
					handleDelete={props.handleDelete}
					handleComplete={props.handleComplete}
				/>
			))}
		</div>
	);
}
export default Home;
