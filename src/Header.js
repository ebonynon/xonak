export default function Header() {
  return (
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="index.html">
              {" "}
              <img src="img/logo.png" alt="logo" />{" "}
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse main-menu-item justify-content-end"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="service.html">
                    Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="project.html">
                    Portfolio
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="blog.html">
                    Blog
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="blog.html"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    pages
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="single-blog.html">
                      Single blog
                    </a>
                    <a class="dropdown-item" href="elements.html">
                      Elements
                    </a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
