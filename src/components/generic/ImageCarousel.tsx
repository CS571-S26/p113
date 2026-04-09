import { Carousel } from 'react-bootstrap'
import type { CarouselImage } from '../../types'

interface ImageCarouselProps {
    images: CarouselImage[];
}

function ImageCarousel(props: ImageCarouselProps) {

    return (
        <Carousel>
            {props.images.map((image, index) => (
                <Carousel.Item key={index}>
                    <img {...image} style={{ width: "100%", height: "350px", objectFit: "cover" }} />
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default ImageCarousel