import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Link to={`card/${12345}`}>blabla</Link>
      <Outlet />
    </>
  );
}
