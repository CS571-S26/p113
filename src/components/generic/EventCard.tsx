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

function googleCalendarUrl(event: ClubEvent) {
    const start = event.date.replace(/-/g, "");
    const [year, month, day] = event.date.split("-").map(Number);
    const next = new Date(year, month - 1, day + 1);
    const end = `${next.getFullYear()}${String(next.getMonth() + 1).padStart(2, "0")}${String(next.getDate()).padStart(2, "0")}`;
    const params = new URLSearchParams({
        action: "TEMPLATE",
        text: event.name,
        dates: `${start}/${end}`,
        location: event.location,
        details: event.description,
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export default function EventCard({ event, signedUp, onToggle }: EventCardProps) {
    return (
        <Card className={`event-card${signedUp ? " event-card--going" : ""}`}>
            <Card.Body>
                <div className="event-card-meta">
                    <span className="event-card-date">📅 {formatDate(event.date)}</span>
                    <span className="event-card-location">📍 {event.location}</span>
                </div>
                <Card.Title as="h2" className="event-card-title">{event.name}</Card.Title>
                <Card.Text className="event-card-desc">{event.description}</Card.Text>
                <div className="event-card-actions">
                    <button
                        className={`event-btn${signedUp ? " event-btn--cancel" : " event-btn--join"}`}
                        onClick={() => onToggle(event.id)}
                    >
                        {signedUp ? "✓ Going — Cancel" : "Sign Up"}
                    </button>
                    {signedUp && (
                        <a
                            className="event-calendar-link"
                            href={googleCalendarUrl(event)}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            📅 Add to Google Calendar
                        </a>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}
