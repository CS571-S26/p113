import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
import bellevueHeader from "../../assets/frontPage/header_bellevue_new.png";
import climbingPhoto from "../../assets/frontPage/DSC03295.png";
import routeSetting from "../../assets/frontPage/Route-Setting.png";
import FAQ from "../generic/FAQ";
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

const FAQS = [
    {
        q: "Do I need experience to join?",
        a: "Not at all. We welcome climbers of every level, from total beginners to experienced sport and trad climbers. Show up to a meetup and we'll get you on the wall.",
    },
    {
        q: "Do I need my own gear?",
        a: "No. The club has shoes, harnesses, and helmets you can borrow at any meetup. If you decide to stick with it, we can help you pick out your own gear.",
    },
    {
        q: "How much does it cost to join?",
        a: "Club dues are $25 per semester, which covers gym passes for our weekly indoor sessions and helps fund outdoor trips.",
    },
    {
        q: "Where and when do you meet?",
        a: "We meet weekly at Boulders Climbing Gym on Wednesday evenings, plus weekend outdoor trips throughout the season. Check the Schedule page for upcoming dates.",
    },
    {
        q: "Are outdoor trips beginner-friendly?",
        a: "Yes — most of our trips include routes and boulders for every level, and experienced members are always around to belay and give pointers.",
    },
];

export default function Home() {
    return (
        <div>
            <ImageCarousel images={[
                { src: routeSetting, alt: "Setting a Route" },
                { src: bellevueHeader, alt: "Club at the Crag" },
                { src: climbingPhoto, alt: "Bouldering Night" },
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
                                    <h2>{title}</h2>
                                    <p>{desc}</p>
                                    <span className="quick-card-arrow">→</span>
                                </Link>
                            </Col>
                        ))}
                    </Row>

                    <FAQ items={FAQS} />
                </Container>
            </div>
        </div>
    );
}
