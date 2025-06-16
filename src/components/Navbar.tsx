const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="/">
          My-Event-App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-light" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/events">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/showcase">
                Showcase
              </a>
            </li>
            <li className="nav-item position-absolute top-25 end-0 me-2">
              <a className="nav-link text-light" href="/login">
                Log In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

function displayName() {
  const localData = localStorage.getItem("currentUser");
  if (localData) {
    const userData = JSON.parse(localData);
    return userData.email;
  }
  return "Log In";
}

export default Navbar;
