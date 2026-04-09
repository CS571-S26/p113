import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import type { Climb } from "../../types";

export default function ClimbCard({ climb }: { climb: Climb }) {
    const [showBeta, setShowBeta] = useState(false);

    return (
        <Card style={{ maxWidth: "360px" }}>
            <Card.Img variant="top" src={climb.src} alt={climb.name} style={{ objectFit: "cover", height: "220px" }} />
            <Card.Body>
                <Card.Title>{climb.name}</Card.Title>
                <Button variant="outline-secondary" size="sm" onClick={() => setShowBeta(!showBeta)}>
                    {showBeta ? "Hide Beta" : "Show Beta"}
                </Button>
                {showBeta && <Card.Text className="mt-2">{climb.beta}</Card.Text>}
            </Card.Body>
        </Card>
    );
}
