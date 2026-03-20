const Navbar = ({ setCategory }) => {
  const categories = [
    { name: "Technology", icon: "🔧" },
    { name: "Business", icon: "💼" },
    { name: "Health", icon: "⚕️" },
    { name: "Sports", icon: "⚽" },
    { name: "Entertainment", icon: "🎬" },
    { name: "Science", icon: "🔬" }
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          <span className="badge bg-danger fs-5 px-3 py-2">📰 NewsMag</span>
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
          <ul className="navbar-nav ms-auto gap-2">
            {categories.map((category) => (
              <li className="nav-item" key={category.name}>
                <button
                  className="nav-link btn btn-outline-light rounded-pill px-3 transition"
                  onClick={() => setCategory(category.name.toLowerCase())}
                  style={{
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    fontSize: "0.95rem"
                  }}
                  onMouseEnter={(e) => {
                    e.target.classList.add("bg-danger");
                    e.target.classList.remove("btn-outline-light");
                  }}
                  onMouseLeave={(e) => {
                    e.target.classList.remove("bg-danger");
                    e.target.classList.add("btn-outline-light");
                  }}
                >
                  {category.icon} {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;