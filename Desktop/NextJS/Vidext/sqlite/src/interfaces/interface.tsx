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
    onClick: (src: string) => void;
}

export interface ClientComponentProps {
    videos: Video[];
}

export interface MiniPlayerProps {
    src: string
    onClick: (src: string) => void
}

export interface LikeIconProps {
    color1: string;
    color2: string;
  }