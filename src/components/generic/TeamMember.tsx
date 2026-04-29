import { Card } from "react-bootstrap";
import type { Member } from "../../types";
import "./TeamMember.css";

function initials(name: string) {
    return name.split(" ").map(n => n[0]).join("").toUpperCase();
}

function avatarColor(name: string) {
    const colors = ["#2d9e6b", "#0f3460", "#6366f1", "#d97706", "#dc2626", "#0891b2"];
    let hash = 0;
    for (const c of name) hash = (hash * 31 + c.charCodeAt(0)) & 0xffff;
    return colors[hash % colors.length];
}

export default function TeamMember({ member }: { member: Member }) {
    return (
        <Card className="team-card">
            <Card.Body className="team-card-body">
                <div
                    className="team-avatar"
                    style={{ backgroundColor: avatarColor(member.name) }}
                >
                    {initials(member.name)}
                </div>
                <div>
                    <Card.Title as="h2" className="team-card-name">{member.name}</Card.Title>
                    <Card.Subtitle as="p" className="team-card-sub">
                        {member.major} · Age {member.age}
                    </Card.Subtitle>
                    <Card.Text className="team-card-bio">{member.bio}</Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
}
