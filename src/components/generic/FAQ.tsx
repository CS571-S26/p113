import { Accordion } from "react-bootstrap";
import "./FAQ.css";

type FAQItem = {
    q: string;
    a: string;
};

type FAQProps = {
    title?: string;
    items: FAQItem[];
};

export default function FAQ({ title = "Frequently Asked Questions", items }: FAQProps) {
    return (
        <section className="faq-section">
            <h2>{title}</h2>
            <Accordion flush>
                {items.map(({ q, a }, i) => (
                    <Accordion.Item eventKey={String(i)} key={q}>
                        <Accordion.Header>{q}</Accordion.Header>
                        <Accordion.Body>{a}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </section>
    );
}
