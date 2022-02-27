const getPosts = (req,res) =>{
    res.status(200).json({message:'Here are your posts'})
}
const setPost = (req,res) =>{
    res.status(200).json({message:'The post has been created'})
}
const updatePost = (req,res) =>{
    res.status(200).json({message:`The post with the id ${req.params.id} has been updated`})
}
const deletePost = (req,res) =>{
    res.status(200).json({message:`The post with the id ${req.params.id} has been deleted`})
}

module.exports = {
    getPosts,
    setPost,
    updatePost,
    deletePost
}