import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet, useLocation } from "react-router";
import Logo from "../../../public/Logo.png";
import Footer from "./Footer";
import "./Layout.css";

const NAV_LINKS = [
    { to: "/", label: "Home", exact: true },
    { to: "/climbs", label: "Climbs" },
    { to: "/schedule", label: "Schedule" },
    { to: "/team", label: "Team" },
];

function Layout() {
    const { pathname } = useLocation();

    function isActive(to: string, exact?: boolean) {
        return exact ? pathname === to : pathname.startsWith(to);
    }

    return (
        <div className="layout-root">
            <Navbar bg="dark" variant="dark">
                <Container fluid className="px-3">
                    <Navbar.Brand as={Link} to="/" className="me-4">
                        <img
                            alt="Climbing Club Logo"
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top me-2"
                        />
                        Climbing Club
                    </Navbar.Brand>
                    <Nav className="align-items-center gap-1">
                        {NAV_LINKS.map(({ to, label, exact }) => (
                            <Nav.Link
                                key={to}
                                as={Link}
                                to={to}
                                className={`nav-pill${isActive(to, exact) ? " active" : ""}`}
                            >
                                {label}
                            </Nav.Link>
                        ))}
                        <Nav.Link
                            as={Link}
                            to="/signup"
                            className={`nav-pill-signup${isActive("/signup") ? " active" : ""}`}
                        >
                            Sign Up
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <main className="layout-main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
