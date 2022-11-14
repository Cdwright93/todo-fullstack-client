import "../App.css";
import { Link } from "react-router-dom";
import ToDoCard from "../Components/ToDoCard";

function Home(props) {
	if (props.todos.length === 0) {
		return (
			<div className="app-body">
				<h1 className="welcome-h1">Welcome!</h1>
				<p className="welcome-p">
					There are no todos yet. Click the Link below to add one.
				</p>
				<Link to="/add" className="welcome-link">
					Add a Todo
				</Link>
			</div>
		);
	} else
		return (
			<div className="app-body">
				<h1 className="home-h1">My Todos</h1>
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
