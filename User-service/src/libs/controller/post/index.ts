import getAllPosts from './get.all.post.controller'

export default(dependencies:any)=> {
    return {
        getAllPosts :getAllPosts(dependencies)
    }
}