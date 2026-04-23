import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
import routeSetting from "../../assets/Route-Setting.png";
import ImageCarousel from "../generic/ImageCarousel";
import "./Home.css";

const QUICK_LINKS = [
    {
        to: "/climbs",
        icon: "🧗",
        title: "Current Projects",
        desc: "See the routes and boulders we're working on right now.",
    },
    {
        to: "/schedule",
        icon: "📅",
        title: "Upcoming Events",
        desc: "Weekly meetups, outdoor trips, and competitions.",
    },
    {
        to: "/team",
        icon: "👥",
        title: "Meet the Team",
        desc: "The people who make the club run.",
    },
];

export default function Home() {
    return (
        <div>
            <ImageCarousel images={[
                { src: routeSetting, alt: "Setting a Route" },
                { src: routeSetting, alt: "Club at the Crag" },
                { src: routeSetting, alt: "Bouldering Night" },
            ]} />

            <div className="hero">
                <Container>
                    <h1>Madison Climbing Club</h1>
                    <p>
                        A student-run club dedicated to rock climbing in all its forms —
                        bouldering, sport, and trad. All skill levels welcome.
                    </p>
                </Container>
            </div>

            <div className="home-section">
                <Container>
                    <div className="home-intro mb-5">
                        <p>
                            We meet weekly to climb together, work on projects, and plan outdoor trips to crags
                            around Wisconsin. Whether you've never touched a wall or you're sending hard routes,
                            there's a place for you here.
                        </p>
                    </div>

                    <Row className="g-4">
                        {QUICK_LINKS.map(({ to, icon, title, desc }) => (
                            <Col key={to} md={4}>
                                <Link to={to} className="quick-card">
                                    <div className="quick-card-icon">{icon}</div>
                                    <h5>{title}</h5>
                                    <p>{desc}</p>
                                    <span className="quick-card-arrow">→</span>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
}
