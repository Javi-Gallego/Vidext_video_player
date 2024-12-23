export interface Video{
    id: number
    name: string
    path: string
    views: number
    createdAt: Date
}

export interface VideoBoardProps {
    videos: Video[]
    onClick: (src: string) => void;
}

export interface ClientComponentProps {
    videos: Video[]
}

export interface MiniPlayerProps {
    src: string
    onClick: (src: string) => void
}

export interface AuthContextType {
    isLoggedIn: boolean
    login: (name:string, password:string) => Promise<void>
    logout: () => void
}
  
export interface CustomJwtPayload {
    userId: string
    iat: number
    exp: number
}

export interface LikeIconProps {
    color1: string
    color2: string
}

export interface ArrayLikesProps {
    userId: number
    videoId: number
}

export interface CountLikesProps {
    videoId: number
    likeCount: number
}