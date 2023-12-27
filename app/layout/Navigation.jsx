import { Link } from "@remix-run/react";
import logo from "../../public/logo.png";

// Navigation width > 545px
export default function Navigation() {
  return (
    <>
      <div className="navigation-container">
        <ul>
          <li>
            <Link to="/">
              <img src={logo} alt="Upside Microphones logo." id="nav-logo" />
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        <div>
          <button>
            <Link to="/" id="btn-signin">Sign In</Link>
          </button>
          <button>
            <Link to="/" id="nav-link--highlight">
              Sign Up
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
