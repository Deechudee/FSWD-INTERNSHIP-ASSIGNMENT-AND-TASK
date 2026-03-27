function Sidebar() {
  return (
    <div className="sidebar">
      <h2>SpendWise</h2>

      <ul>
        <li>Dashboard</li>
        <li>Analytics</li>
        <li className="active">Products</li>
        <li>Sales</li>
        <li>Email</li>
      </ul>
    </div>
  );
}

export default Sidebar;