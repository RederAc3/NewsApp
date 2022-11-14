export type News = {
    id: number;
    title: string;
    content: string;
    comments: Comment[];
    author: Author;
    numberOfLikes: number;
    isLiked: boolean;
    createDate: Date;
    type: number;
};