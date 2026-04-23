import { Card } from "react-bootstrap";
import type { ClubEvent } from "../../types";
import "./EventCard.css";

interface EventCardProps {
    event: ClubEvent;
    signedUp: boolean;
    onToggle: (id: number) => void;
}

function formatDate(iso: string) {
    const [year, month, day] = iso.split("-").map(Number);
    return new Date(year, month - 1, day).toLocaleDateString("en-US", {
        month: "long", day: "numeric", year: "numeric",
    });
}

export default function EventCard({ event, signedUp, onToggle }: EventCardProps) {
    return (
        <Card className={`event-card${signedUp ? " event-card--going" : ""}`}>
            <Card.Body>
                <div className="event-card-meta">
                    <span className="event-card-date">📅 {formatDate(event.date)}</span>
                    <span className="event-card-location">📍 {event.location}</span>
                </div>
                <Card.Title className="event-card-title">{event.name}</Card.Title>
                <Card.Text className="event-card-desc">{event.description}</Card.Text>
                <button
                    className={`event-btn${signedUp ? " event-btn--cancel" : " event-btn--join"}`}
                    onClick={() => onToggle(event.id)}
                >
                    {signedUp ? "✓ Going — Cancel" : "Sign Up"}
                </button>
            </Card.Body>
        </Card>
    );
}
