import { Container } from "react-bootstrap";
import "./PageBanner.css";

interface PageBannerProps {
    title: string;
    subtitle?: string;
}

export default function PageBanner({ title, subtitle }: PageBannerProps) {
    return (
        <div className="page-banner">
            <Container>
                <h1 className="page-banner-title">{title}</h1>
                {subtitle && <p className="page-banner-subtitle">{subtitle}</p>}
            </Container>
        </div>
    );
}
