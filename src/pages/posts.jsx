import { useEffect, useState } from "react"
import usePost from "../hooks/usePost"
import useLoading from "../hooks/useLoading"
import postServise from "../API/postServise"
import getCountPage from "../components/utils/getCountPage"
import MyBtn from "../components/UI/MyButton"
import MyInp from "../components/UI/MyInput"
import MySelect from "../components/select"
import MyModule from "../components/MyModyle"
import Forma from "../components/forma"
import PostList from "../components/postList"
import MySpan from "../components/UI/MySpan"
import MyLoader from "../components/UI/MyLoader"

function Posts() {

  const [post,setPost] = useState([])
  const [select,setSelect] = useState('')
  const [seartch,setSeartch] = useState('')
  const [view,setView] = useState(false)
  const [countPage,setCountPage] = useState(0)
  const [limit,setLimit] = useState(10)
  const [page,setPage] = useState(1)
  const SortedAndSelected =usePost(select,post,seartch)

  const [isPostload,err,featchPosts] = useLoading(async()=>{
      const response = await postServise.getAll(limit,page)
      const totalPage = response.headers['x-total-count']
      setCountPage(getCountPage(totalPage,limit))
      setPost(response.data)
  })

  useEffect(()=>{
    featchPosts()
  },[page])
  function create(art){
    setPost([...post,art])
    setView(false)
  }
  function remove(art){
    setPost(post.filter(p=>p.id !== art.id))
  }
  function sortPost(item){
    setSelect(item)
  }
  function clickSetPage(p){
    setPage(p)
  }

  return (
    <div className="App">

      <div className="seartch">
        <MyBtn onClick={()=>setView(true)}>Создать пост</MyBtn>
        <MyInp
            value={seartch} 
            onChange={e=>setSeartch(e.target.value)} 
            placeholder="Поиск постов"/>
        <MySelect
            value={select}
            onChange={sortPost} 
            option={[
                 {value:'title',name:'По названию'},
                {value:'body',name:'По тексту'}
              ]}/>
      </div>

      <MyModule view={view} setView={setView}>
        <Forma create={create}/>
      </MyModule>
      {
        err &&
        <h1 style={{textAlign:'center'}}>Ошибка "{err}"</h1> 
      }
      { isPostload
      ? <div><MyLoader title={'постов'}/></div>
        : <PostList post={SortedAndSelected} removePost={remove} title={SortedAndSelected.length === 0 ? 'Постов нет!' : 'Список постов'}/> 
        
      }
      
      <MySpan countPage={countPage} page={page} clickSetPage={clickSetPage}/>

      
    </div>
  );
}

export default Posts;
