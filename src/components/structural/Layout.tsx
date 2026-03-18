import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router";
import Logo from "../../../public/Logo.png"

function Layout() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Nav className="me-auto">
                        <Navbar.Brand as={Link} to="/">
                            <img
                                alt="Climbing Club Logo"
                                src={Logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            Climbing Club
                        </Navbar.Brand>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="climbs">Climbs</Nav.Link>
                        <Nav.Link as={Link} to="schedule">Schedule</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div style={{ margin: "1rem" }}>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;

/*


                    */