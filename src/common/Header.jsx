const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark px-3">
        <a className="navbar-brand fw-bold text-light" href="#">
          Remote Work
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="text-light">Hi</div>
        </div>
      </nav>
    </>
  );
};

export default Header;
