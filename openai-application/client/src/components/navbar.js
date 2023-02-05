import React from 'react'
import "semantic-ui-css/semantic.min.css";

const navbar = () => {
  return (
    <div>
      <nav className="navbar bg-dark fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#">
            Rubik's.ai
          </a>
          <div className="nav-buttons">
            <button type="button" class="btn btn-outline-light">
              SignUp/Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default navbar
