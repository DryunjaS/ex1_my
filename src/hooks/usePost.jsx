import {useMemo} from "react"

export const useSortedPosts = (select,post)=>{
    const sortedPosts = useMemo(()=>{
        if(select){
          return [...post].sort((a,b)=>a[select].localeCompare(b[select]))
        }
        return post
      },[select,post])
    return sortedPosts
}

const usePost = (select,post,seartch)=>{
    const sortedPost = useSortedPosts(select,post)

    const SortedAndSelected = useMemo(()=>{
        return sortedPost.filter(p=>p.title.toLowerCase().startsWith(seartch.toLowerCase()))
      },[seartch,sortedPost])

    return SortedAndSelected
}
export default usePost

