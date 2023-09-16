import React from "react";

const MySelect = ({option,value,onChange})=>{
    return(
        <select value={value} onChange={e=>onChange(e.target.value)}>
            <option disabled>Сортировка</option>
            {option.map(el=><option key={el.name} value={el.value}>{el.name}</option>)}
        </select>
    )
}

export default MySelect