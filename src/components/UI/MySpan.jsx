import React from "react";

const MySpan = ({countPage,page,clickSetPage})=>{
    let pages = []
    for(let i=0;i<countPage;i++){
        pages.push(i+1)
    }
    return(
        <div className='MySpan-wrap'>
            {pages.map(el=><span className={el === page ? 'mySpan mySpan-active' : 'mySpan'} onClick={()=>clickSetPage(el)}>{el}</span>)}
        </div>
    )
}

export default MySpan 