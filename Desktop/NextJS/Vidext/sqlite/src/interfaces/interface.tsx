export interface Video{
    id: number;
    name: string;
    path: string;
    views: number;
    likes: number;
    createdAt: Date;
}

export interface VideoBoardProps {
    videos: Video[];
}