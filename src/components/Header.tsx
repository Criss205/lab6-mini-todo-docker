import { NavLink } from "react-router";
import "./header.css";
function Header() {

  return (
    <>
      <NavLink to="/" className="button-link">Home</NavLink>
      <NavLink to="/task" className="button-link">Task</NavLink>
      <NavLink to="/task/new" className="button-link">New Task</NavLink>
    </>
  );
}
export { Header };