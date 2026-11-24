
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Engineering College</h1>
      <p>Knowledge is Power</p>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
