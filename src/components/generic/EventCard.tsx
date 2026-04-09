import { Button, Card } from "react-bootstrap";
import type { ClubEvent } from "../../types";

interface EventCardProps {
    event: ClubEvent;
    signedUp: boolean;
    onToggle: (id: number) => void;
}

export default function EventCard({ event, signedUp, onToggle }: EventCardProps) {
    return (
        <Card style={{ maxWidth: "400px" }}>
            <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{event.date} · {event.location}</Card.Subtitle>
                <Card.Text>{event.description}</Card.Text>
                <Button
                    variant={signedUp ? "danger" : "primary"}
                    size="sm"
                    onClick={() => onToggle(event.id)}
                >
                    {signedUp ? "Cancel Sign Up" : "Sign Up"}
                </Button>
            </Card.Body>
        </Card>
    );
}
