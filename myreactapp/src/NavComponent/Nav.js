import './Nav.css';
function Nav() {
    return(
        <div>
            {/* Navbar Start */}
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a class="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 class="m-0 text-primary">eAuction</h2>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a  class="nav-item nav-link active">Home</a>
                <a  class="nav-item nav-link">About</a>
                <a  class="nav-item nav-link">Contact</a>
                <div class="nav-item dropdown">
                    <a  class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Service</a>
                    <div class="dropdown-menu fade-up m-0">
                        <a  class="dropdown-item">Blog</a>
                        <a  class="dropdown-item">Portfolio</a>
                    </div>
                </div>
                <a  class="nav-item nav-link">Register</a>
            </div>
            <a  class="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Login<i class="fa fa-arrow-right ms-3"></i></a>
        </div>
    </nav>
    {/* Navbar End */}
        </div>
    );
}
export default Nav;