import { NavLink } from 'react-router-dom';
import '../styles/components/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavLink to="/" className="nav-brand">Incredible Odisha</NavLink>
      </div>
      <div className="nav-right">
        <ul className="nav-links">
          <li><NavLink to="/history" className={({ isActive }) => isActive ? "active-link" : ''}>History</NavLink></li>
          <li><NavLink to="/geography" className={({ isActive }) => isActive ? "active-link" : ''}>Geography</NavLink></li>
          <li><NavLink to="/economy" className={({ isActive }) => isActive ? "active-link" : ''}>Economy</NavLink></li>
          <li><NavLink to="/culture" className={({ isActive }) => isActive ? "active-link" : ''}>Culture</NavLink></li>
          <li><NavLink to="/tourism" className={({ isActive }) => isActive ? "active-link" : ''}>Tourism</NavLink></li>
          <li><NavLink to="/cuisine" className={({ isActive }) => isActive ? "active-link" : ''}>Cuisine</NavLink></li>
          <li><NavLink to="/people" className={({ isActive }) => isActive ? "active-link" : ''}>People & Lifestyle</NavLink></li>
          <li><NavLink to="/news" className={({ isActive }) => isActive ? "active-link" : ''}>News & Events</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ''}>Contact Us</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
