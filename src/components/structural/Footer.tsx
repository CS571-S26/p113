import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
import "./Footer.css";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <Container>
                <Row className="gy-4">
                    <Col md={5}>
                        <h2 className="footer-heading">Madison Climbing Club</h2>
                        <p className="footer-text">
                            A student-run club at UW–Madison for climbers of every level.
                            Bouldering, sport, trad — all welcome.
                        </p>
                    </Col>
                    <Col md={3}>
                        <h3 className="footer-heading">Explore</h3>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/climbs">Climbs</Link></li>
                            <li><Link to="/schedule">Schedule</Link></li>
                            <li><Link to="/team">Team</Link></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h3 className="footer-heading">Get in touch</h3>
                        <ul className="footer-links">
                            <li>
                                <a href="mailto:climbingclub@wisc.edu">climbingclub@wisc.edu</a>
                            </li>
                            <li>
                                <Link to="/signup">Join the club</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <div className="footer-bottom">
                    <span>&copy; {year} Madison Climbing Club</span>
                </div>
            </Container>
        </footer>
    );
}
