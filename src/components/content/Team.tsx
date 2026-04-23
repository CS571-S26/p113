import { Col, Container, Row } from "react-bootstrap";
import PageBanner from "../generic/PageBanner";
import TeamMember from "../generic/TeamMember";
import type { Member } from "../../types";

const members: Member[] = [
    { name: "Sebastian Marcus", age: 21, major: "Computer Science", bio: "Club founder. Obsessed with roof cracks and slab." },
    { name: "Alex Rivera", age: 20, major: "Mechanical Engineering", bio: "Strong on overhangs. Has been climbing for 4 years." },
    { name: "Jordan Lee", age: 22, major: "Biology", bio: "Loves outdoor trad climbing. The club's go-to gear expert." },
    { name: "Sam Chen", age: 19, major: "Mathematics", bio: "First year and already projecting V6. Pure talent." },
    { name: "Taylor Nguyen", age: 21, major: "Psychology", bio: "Into mental training for climbing. Leads most of our crag trips." },
];

export default function Team() {
    return (
        <div>
            <PageBanner title="Meet the Team" subtitle="The people who make the club run." />
            <Container className="py-4">
                <Row className="g-4">
                    {members.map(member => (
                        <Col key={member.name} sm={6} lg={4}>
                            <TeamMember member={member} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
