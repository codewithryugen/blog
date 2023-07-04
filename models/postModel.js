import mongoose from "mongoose";

const {Schema} = mongoose;
const postSchema = Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    excerpt:{
        type:String,
        required:true,
    }
},{timestamps:true});

const Post = mongoose.model('Post',postSchema);
export default Post;