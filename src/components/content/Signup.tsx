import { useState } from "react";
import { Alert, Col, Container, Form, Row } from "react-bootstrap";
import PageBanner from "../generic/PageBanner";
import "./Signup.css";

const COLLEGE_YEARS = ["Freshman", "Sophomore", "Junior", "Senior", "Graduate"];

function Signup() {
    const alreadySignedUp = sessionStorage.getItem("signedUp") === "true";

    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [year, setYear] = useState("");
    const [interest, setInterest] = useState("");
    const [submitted, setSubmitted] = useState(alreadySignedUp);
    const [validated, setValidated] = useState(false);

    const wordCount = interest.trim() === "" ? 0 : interest.trim().split(/\s+/).length;

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.checkValidity() || wordCount > 30) {
            setValidated(true);
            return;
        }
        sessionStorage.setItem("signedUp", "true");
        setSubmitted(true);
    }

    if (submitted) {
        return (
            <div>
                <PageBanner title="Sign Up" subtitle="Join the Madison Climbing Club." />
                <Container className="py-5" style={{ maxWidth: 600 }}>
                    <Alert variant="success" className="signup-success">
                        <div className="signup-success-icon">✓</div>
                        <Alert.Heading as="h2">You're signed up!</Alert.Heading>
                        <p>Thanks for joining the Climbing Club. We'll see you on the wall!</p>
                    </Alert>
                </Container>
            </div>
        );
    }

    return (
        <div>
            <PageBanner title="Sign Up" subtitle="Join the Madison Climbing Club." />
            <Container className="py-4" style={{ maxWidth: 600 }}>
                <div className="signup-card">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="signupName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Jane Smith"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="signupDob">
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">Please enter your date of birth.</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="signupYear">
                                <Form.Label>College Year</Form.Label>
                                <Form.Select
                                    required
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                >
                                    <option value="">Select your year...</option>
                                    {COLLEGE_YEARS.map((y) => (
                                        <option key={y} value={y}>{y}</option>
                                    ))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">Please select your year.</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-4">
                            <Form.Group as={Col} controlId="signupInterest">
                                <Form.Label>
                                    Why are you interested?{" "}
                                    <span className="text-muted">(30 words max)</span>
                                </Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    required
                                    placeholder="Tell us a bit about why you want to join..."
                                    value={interest}
                                    onChange={(e) => setInterest(e.target.value)}
                                    isInvalid={validated && (interest.trim() === "" || wordCount > 30)}
                                />
                                <Form.Text className={wordCount > 30 ? "text-danger" : "text-muted"}>
                                    {wordCount} / 30 words
                                </Form.Text>
                                <Form.Control.Feedback type="invalid">
                                    {interest.trim() === ""
                                        ? "Please tell us why you're interested."
                                        : "Please keep your response to 30 words or fewer."}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <button type="submit" className="signup-btn">Join the Club →</button>
                    </Form>
                </div>
            </Container>
        </div>
    );
}

export default Signup;
