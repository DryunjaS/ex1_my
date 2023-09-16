import React from "react";
import MyBtn from './UI/MyButton'
import { useNavigate } from 'react-router-dom'; 

const Post = ({post, id, removePost}) => {
    const navigate = useNavigate(); 

    const handleOpenPost = () => {
        navigate(`/posts/${id}`);
    }

    return (
        <div className="post__wrapper">
            <div className="text">
                <div className="title">{id}. {post.title}</div>
                <div className="body">{post.body}</div>
            </div>
            <MyBtn onClick={handleOpenPost}>Открыть</MyBtn>
            <MyBtn onClick={() => removePost(post)}>Удалить</MyBtn>
        </div>
    )
}

export default Post;
