import {useState} from "react";

const useLoading = (callback)=>{
    const [progress,setProgress] = useState(false)
    const [err,setErr] = useState('')

    const fetching = async ()=>{
        try{
            setProgress(true)
            await callback()
        }
        catch(e){
            setErr(e.message)
        }
        finally{
            setProgress(false)
        }
    }

    return [progress,err,fetching]
}

export default useLoading