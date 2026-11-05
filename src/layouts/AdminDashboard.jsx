import { Link, Outlet } from "react-router-dom";

function AdminDashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <nav>
        <Link to="/dashboard/profile">Profile</Link>
        <br />
        <Link to="/dashboard/settings">Settings</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default AdminDashboard;
