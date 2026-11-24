
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside>
      <h3>Quick Links</h3>

      <Link to="/">Home</Link>
      <Link to="/about">About College</Link>
      <Link to="/courses">Login</Link>
      <Link to="/admissions">Register</Link>
      <Link to="/contact">Contact Us</Link>
    </aside>
  );
}

export default Sidebar;
