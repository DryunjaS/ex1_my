import React,{useState} from "react";
import MyInp from "./UI/MyInput";
import MyBtn from "./UI/MyButton";
// import '../style/main.css'

const Forma = ({create})=>{
    
    const [newItm,setNewItm] = useState({title:'',body:''})

    function createImt(e){
        e.preventDefault()
        const obj = {
            ...newItm,
            id:Date.now()
        }
        create(obj)
        setNewItm({title:'',body:''})
    }

    return(
        <div>
        <form className="form__wrap">
            <h1 style={{textAlign:'center'}}>Создание поста</h1>
            <MyInp placeholder={'Название поста'} value={newItm.title} onChange={e=>setNewItm({...newItm,title:e.target.value})}/>
            <MyInp  placeholder={'Содержание поста'} value={newItm.body} onChange={e=>setNewItm({...newItm,body:e.target.value})}/>
            <MyBtn onClick={createImt}>Создать пост</MyBtn>
        </form>
        </div>
    )
}

export default Forma