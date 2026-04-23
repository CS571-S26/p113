import { useState } from "react";
import { Card } from "react-bootstrap";
import type { Climb } from "../../types";
import "./ClimbCard.css";

export default function ClimbCard({ climb }: { climb: Climb }) {
    const [showBeta, setShowBeta] = useState(false);

    return (
        <Card className="climb-card">
            <Card.Img variant="top" src={climb.src} alt={climb.name} className="climb-card-img" />
            <Card.Body>
                <Card.Title className="climb-card-title">{climb.name}</Card.Title>
                <button className="beta-toggle" onClick={() => setShowBeta(!showBeta)}>
                    {showBeta ? "Hide Beta ↑" : "Show Beta ↓"}
                </button>
                <div className={`beta-text${showBeta ? " beta-text--visible" : ""}`}>
                    {climb.beta}
                </div>
            </Card.Body>
        </Card>
    );
}
