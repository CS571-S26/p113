export interface CarouselImage {
    src: string;
    alt: string;
}

export interface Climb {
    id: number;
    name: string;
    src: string;
    beta: string;
}

export interface ClubEvent {
    id: number;
    name: string;
    date: string;
    location: string;
    description: string;
}

export interface Member {
    name: string;
    age: number;
    major: string;
    bio: string;
}