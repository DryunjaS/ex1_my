const getCountPage = (countPosts,limit)=>{
    return Math.ceil(countPosts/limit)
}

export default getCountPage