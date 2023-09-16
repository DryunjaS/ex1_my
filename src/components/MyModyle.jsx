import React from "react";
// import '../style/App.css'
// import '../style/main.css'

const MyModule = ({children,view,setView})=>{
    const classView = ['module']

    if(view){
        classView.push('active')
    }

    return(
        <div className={classView.join(' ')} onClick={()=>setView(false)}>
            <div className="content" onClick={e=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModule