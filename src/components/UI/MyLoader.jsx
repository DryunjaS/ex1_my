import React from "react";

const Loader = ({title})=>{
    return(
        <div className="loader-wrap">
            <div className="loader"></div>
            <div>Идет загрузка {title}...</div>
        </div>
    )
}

export default Loader