import asyncHandler from 'express-async-handler';
import Post from '../models/postModel.js';


const data = {
    description:null,
    notfound:false,
    about:false,
    home:false,
    blog:false,
    login:false,
    admin:false,
    content_blog:false,
    storage:null,
    flasher:{
        status:false,
        message:null,
    }
}



export const HomeView = asyncHandler(   
    async(req,res)=>{
        res.render('home',{...data,home:true});
    }
);

export const AboutView = asyncHandler(
    async(req,res)=>{
        res.render('about',{...data,about:true});
    }
);

export const BlogView = asyncHandler(
    async(req,res)=>{
        res.render('blog',{...data,blog:true});
    }
);

export const contentView = asyncHandler(
    async (req,res) =>{
        try{
            const {slug} = req.params;
            data.storage= await Post.findById(slug);
            data.description = data.storage.excerpt;
            res.render('content_blog',{...data,content_blog:true});
        }catch(err){
            return res.redirect('/notfound');
        }
    }
)



export const ProtectedRoutesNotfound = (req,res)=>{
    res.redirect('/notfound');
}

export const NotFound = asyncHandler(
    async (req,res)=>{
        res.render('404',{...data,notfound:true});
    }
);



// admin

export const LoginView = asyncHandler(
    async (req,res)=>{
        res.render('adminator/login',{...data,login:true});
    }
)

export const LoginHandler = asyncHandler(
    async (req,res)=>{
        const {username,password} = req.body;
        if(username==='ryugen'&&password==='1234'){
            req.session.admin=true;
            return res.redirect('/admin');
        }else{
            data.flasher.status=true;
            data.flasher.message='gagal login';
        }
        res.render('adminator/login',{...data,login:true});
    }
    
)

export const LogoutHandler = asyncHandler(
    async(req,res) =>{
        req.session.admin = false;
        res.redirect('/login');
    }
);

export const getPostingan = asyncHandler(
    async(req,res)=>{
        try{
            const posts = await Post.find();
            res.status(200).json(posts);
        }catch(err){
            console.log(err);
        }
    }
);

export const addPostingan = asyncHandler(
    async(req,res)=>{
        try{
            const {title,content} = req.body;
            const {filename} = req.file;
            const excerpt = content.slice(0, 100);
            await Post.create({
                title,
                content,
                image:filename,
                excerpt
            });
            res.render('adminator/index',{...data,admin:true});
        }catch(err){
            data.flasher.status=true;
            data.flasher.message=err.message;
            console.log(err.message);
            res.render('adminator/index',{...data,admin:true});
        }
    }
)

export const AdminView = asyncHandler(
    async (req,res) =>{
        res.render('adminator/index',{...data,admin:true});
    }
)