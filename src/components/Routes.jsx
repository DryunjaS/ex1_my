import { Navigate, Route, Routes } from "react-router-dom";
import Home from '../pages/home'
import About from '../pages/about'
import Error from '../pages/error'
import Posts from "../pages/posts";
import OpenPost from "../pages/openPost";

const Routers = ()=>{

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/posts/:id" element={<OpenPost />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
    )
}

export default Routers