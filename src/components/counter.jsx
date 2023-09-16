import React,{useState} from "react";
import MyBtn from './UI/MyButton'

const Counter = ()=>{

    const [count,setCount] = useState(0)
    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }
    return(
        <div>
           <h1>{count}</h1>
           <MyBtn onClick={increment}>increment</MyBtn> 
           <MyBtn onClick={decrement}>decrement</MyBtn>                  
        </div>
    )
}

export default Counter