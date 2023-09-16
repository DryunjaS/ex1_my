import axios from 'axios'
export default class postServise {
    static async getAll(LIMIT,PAGE){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params:{
                _limit:LIMIT,
                _page:PAGE
            }
        })
        return response
    }
    static async getCommentAll(id){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response.data
    }
}

