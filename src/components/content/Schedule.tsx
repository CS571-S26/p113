import { useState } from "react";
import { Nav } from "react-bootstrap";
import EventCard from "../generic/EventCard";
import type { ClubEvent } from "../../types";

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
    const [tab, setTab] = useState("all");

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
            <h2 className="mb-3">Upcoming Events</h2>
            <Nav variant="tabs" className="mb-4" activeKey={tab} onSelect={k => setTab(k ?? "all")}>
                <Nav.Item><Nav.Link eventKey="all">All Events</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="mine">My Events</Nav.Link></Nav.Item>
            </Nav>
            {displayed.length === 0
                ? <p className="text-muted">No events here yet.</p>
                : <div className="d-flex flex-wrap gap-3">
                    {displayed.map(event => (
                        <EventCard
                            key={event.id}
                            event={event}
                            signedUp={signedUpIds.includes(event.id)}
                            onToggle={handleToggle}
                        />
                    ))}
                </div>
            }
        </div>
    );
}
