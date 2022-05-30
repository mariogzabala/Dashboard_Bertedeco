import { Link } from "react-router-dom"

export default function Sidebar() {
    return (
        <>
            {/* Sidebar */}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/* Sidebar - Brand */}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <i className="fas fa-chart-line"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Admin</div>
                </Link>

                {/* Divider */}
                <hr className="sidebar-divider my-0"></hr>

                {/* Nav Item - Dashboard */}
                <li className="nav-item active">
                    <a className="nav-link" target="_blank" rel="noreferrer" href="https://bertedeco.herokuapp.com/">
                        <i className="fas fa-fw fa-store"></i>
                        <span>Bertedeco</span>
                    </a>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider"></hr>

                {/* Heading */}
                <div className="sidebar-heading">Navegación</div>

                {/* Nav Item - Pages */}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/">
                        <i className="fas fa-fw fa-home"></i>
                        <span>Home</span>
                    </Link>
                </li>

                {/* Nav Item - Charts */}
                <li className="nav-item">
                    <Link className="nav-link" to="/products">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Produtos</span>
                    </Link>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block"></hr>
            </ul>
            {/* End of Sidebar */}
        </>
    )
}
