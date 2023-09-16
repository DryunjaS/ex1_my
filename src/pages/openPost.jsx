import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import postServise from "../API/postServise";
import useLoading from "../hooks/useLoading";
import Loader from "../components/UI/MyLoader";

const OpenPost = ()=>{
    const params = useParams()
    const [postOpen,setOpenPost] = useState([])
    const [isPostOpenLoad,errOpen,featchPostsOpen] = useLoading(async()=>{
            const response = await postServise.getCommentAll(params.id)
            setOpenPost([...postOpen, response])
            console.log(`test = ${isPostOpenLoad}`)
        })
    
    useEffect(()=>{
        featchPostsOpen(params.id)
    },[])
    return(
        <div>
            <h1 style={{textAlign:'center',marginTop:'20px',marginBottom:'10px'}}>Пост №{params.id}</h1>
            {
                
                isPostOpenLoad
                ?  <Loader title={'комментариев'}/>
                : <h2>Комментарии к этому посту</h2>
            }
        </div>
    )
}

export default OpenPost