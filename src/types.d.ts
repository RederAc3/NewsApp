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

export type Comment = {
    id : number;
    content: string;
    author: Author;
    createDate: Date;
    numberOfLikes: number;
    isLiked: boolean;
};

export type Author = {
    id : number;
    fullName: string;
};

export type IconBarProps = {
    numberOfLikes: number;
    numberOfComments: number;
    isLiked: boolean;
}