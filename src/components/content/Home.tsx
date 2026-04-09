import routeSetting from "../../assets/Route-Setting.png";
import ImageCarousel from "../generic/ImageCarousel";
import { Container } from "react-bootstrap";

export default function Home() {
    return (
        <div>
            <ImageCarousel images={[
                { src: routeSetting, alt: "Setting a Route" },
                { src: routeSetting, alt: "Club at the Crag" },
                { src: routeSetting, alt: "Bouldering Night" },
            ]} />
            <Container className="py-4">
                <h1>Madison Climbing Club</h1>
                <p className="lead">
                    A student-run club dedicated to rock climbing in all its forms — bouldering, sport, and trad.
                </p>
                <hr />
                <p>
                    We meet weekly to climb together, work on projects, and plan outdoor trips to crags around Wisconsin.
                    Whether you've never touched a wall or you're sending hard routes, there's a place for you here.
                    Check out our current <a href="#/climbs">projects</a>, see what <a href="#/schedule">events</a> are coming up, or <a href="#/team">meet the team</a>.
                </p>
            </Container>
        </div>
    );
}
