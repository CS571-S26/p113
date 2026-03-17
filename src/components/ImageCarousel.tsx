import { Carousel } from 'react-bootstrap'
import type { CarouselImage } from '../types'

interface ImageCarouselProps {
    images: CarouselImage[];
}

function ImageCarousel(props: ImageCarouselProps) {

    return <Carousel>
        {
            props.images.map((image, index) => <Carousel.Item key={index}>
                <img {...image}/>
            </Carousel.Item>)
        }
    </Carousel>
}

export default ImageCarousel