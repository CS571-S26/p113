import ImageCarousel from "../generic/ImageCarousel";
import routeSetting from "../../assets/Route-Setting.png";
import { Card } from "react-bootstrap";

function Climbs() {
    return <>
        <Card>
            <ImageCarousel images={[
                {
                    "src": routeSetting,
                    "alt": "Setting a Route",
                },
                {
                    "src": routeSetting,
                    "alt": "Setting a Route",
                },
                {
                    "src": routeSetting,
                    "alt": "Setting a Route",
                },
            ]}></ImageCarousel>
        </Card>
        
    </>
}

export default Climbs;