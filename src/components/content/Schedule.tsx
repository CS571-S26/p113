import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageBanner from "../generic/PageBanner";
import EventCard from "../generic/EventCard";
import type { ClubEvent } from "../../types";
import "./Schedule.css";

const events: ClubEvent[] = [
    {
        id: 1,
        name: "Bouldering Night",
        date: "2026-04-18",
        location: "Madison Bouldering Project",
        description: "Casual bouldering session — all levels welcome. We'll work on problems together.",
    },
    {
        id: 2,
        name: "Outdoor Crag Day",
        date: "2026-05-03",
        location: "Devil's Lake State Park",
        description: "Full day at the crags. Bring your own gear or borrow from the club. Carpooling available.",
    },
    {
        id: 3,
        name: "Route Setting Workshop",
        date: "2026-05-17",
        location: "Climbing Club Gym",
        description: "Learn how routes get set from our most experienced members. Hands-on setting at the end.",
    },
];

const today = new Date().toISOString().split("T")[0];
const upcomingEvents = events.filter(e => e.date >= today);

export default function Schedule() {
    const [signedUpIds, setSignedUpIds] = useState<number[]>(() => {
        const stored = sessionStorage.getItem("signedUpIds");
        return stored ? JSON.parse(stored) : [];
    });
    const [tab, setTab] = useState<"all" | "mine">("all");

    function handleToggle(id: number) {
        const updated = signedUpIds.includes(id)
            ? signedUpIds.filter(i => i !== id)
            : [...signedUpIds, id];
        setSignedUpIds(updated);
        sessionStorage.setItem("signedUpIds", JSON.stringify(updated));
    }

    const displayed = tab === "mine"
        ? upcomingEvents.filter(e => signedUpIds.includes(e.id))
        : upcomingEvents;

    return (
        <div>
            <PageBanner title="Upcoming Events" subtitle="Weekly meetups, outdoor trips, and competitions." />
            <Container className="py-4">
                <div className="schedule-tabs mb-4">
                    <button
                        className={`schedule-tab${tab === "all" ? " schedule-tab--active" : ""}`}
                        onClick={() => setTab("all")}
                    >
                        All Events
                    </button>
                    <button
                        className={`schedule-tab${tab === "mine" ? " schedule-tab--active" : ""}`}
                        onClick={() => setTab("mine")}
                    >
                        My Events
                        {signedUpIds.length > 0 && (
                            <span className="schedule-tab-badge">{signedUpIds.length}</span>
                        )}
                    </button>
                </div>

                {displayed.length === 0 ? (
                    <p className="text-muted">No events here yet.</p>
                ) : (
                    <Row className="g-4">
                        {displayed.map(event => (
                            <Col key={event.id} sm={6} lg={4}>
                                <EventCard
                                    event={event}
                                    signedUp={signedUpIds.includes(event.id)}
                                    onToggle={handleToggle}
                                />
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        </div>
    );
}
