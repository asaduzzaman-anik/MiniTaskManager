import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <span className="brand">Mini Task Manager</span>

        <nav className="nav-links" aria-label="Main navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Tasks
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            About
          </NavLink>
        </nav>

        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? 'Dark' : 'Light'}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
