import React from "react";
import Post from './post'
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({post,removePost,title})=>{
    return(
        <div>
            <h1 style={{textAlign:'center',marginTop:'20px',marginBottom:'10px'}}>{title}</h1>
            {
                <TransitionGroup>
                    {post.map((el,index) => (
                        <CSSTransition
                            key={index+1}
                            timeout={500}
                            classNames="item"
                        >
                            <Post post={el} id={el.id} removePost={removePost}/>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            }
        </div>
    ) 
}

export default PostList