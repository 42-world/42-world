interface Props {
    avatarSrc: string;
    avatarAlt?: string;
    username: string;
    time: string;
    content: string;
    isMine?: boolean;
    isAuthor?: boolean;
    isLiked?: boolean;
    numOfLikes: number;
    onClickLike?: () => void;
    onClickReply?: () => void;
    onClickEdit?: () => void;
}
export declare function Comment({ avatarSrc, avatarAlt, username, time, content, isMine, isAuthor, isLiked, numOfLikes, onClickLike, onClickEdit, onClickReply, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Comment.d.ts.map