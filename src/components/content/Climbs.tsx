import { Col, Container, Row } from "react-bootstrap";
import routeSetting from "../../assets/Route-Setting.png";
import PageBanner from "../generic/PageBanner";
import ClimbCard from "../generic/ClimbCard";
import type { Climb } from "../../types";

const climbs: Climb[] = [
    {
        id: 1,
        name: "The Crimson Overhang",
        src: routeSetting,
        beta: "Start on the left side rail, flag your right foot early on the overhang, and lock off the top crimp before throwing to the sloper.",
    },
    {
        id: 2,
        name: "Slab Master",
        src: routeSetting,
        beta: "Trust your feet — keep your hips close to the wall and use the tiny smears. Don't rush the top out.",
    },
    {
        id: 3,
        name: "Roof Crack",
        src: routeSetting,
        beta: "Jam your hand in thumb-down for the undercling sequence. Heel hook on the lip before committing to the mantle.",
    },
];

export default function Climbs() {
    return (
        <div>
            <PageBanner title="Current Projects" subtitle="Routes and boulders we're working on right now." />
            <Container className="py-4">
                <Row className="g-4">
                    {climbs.map(climb => (
                        <Col key={climb.id} sm={6} lg={4}>
                            <ClimbCard climb={climb} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
