import { Card } from "react-bootstrap";
import type { Member } from "../../types";

export default function TeamMember({ member }: { member: Member }) {
    return (
        <Card style={{ maxWidth: "300px" }}>
            <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Age {member.age} · {member.major}</Card.Subtitle>
                <Card.Text>{member.bio}</Card.Text>
            </Card.Body>
        </Card>
    );
}
