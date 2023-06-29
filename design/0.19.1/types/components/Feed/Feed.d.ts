interface Props {
    username: string;
    timestamp: string;
    userProfileSrc: string;
    thumbnailSrc: string;
    title: string;
    contents: string;
    isLiked?: boolean;
    likeCount?: number;
    isCommentClicked?: boolean;
    commentCount?: number;
    onClickLike?: () => void;
    onClickComment?: () => void;
}
export declare function Feed({ username, timestamp, userProfileSrc, thumbnailSrc, title, contents, isLiked, likeCount, isCommentClicked, commentCount, onClickLike, onClickComment, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Feed.d.ts.map