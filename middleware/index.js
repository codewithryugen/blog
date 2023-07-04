import expressAsyncHandler from "express-async-handler";
import multer from 'multer';

export const middlewareAdmin = expressAsyncHandler(
    async(req,res,next)=>{
        if(!req.session.admin) return res.redirect('/notfound');
        return next();
    }
)





const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'assets/img/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
const fileFilter = function (req, file, cb) {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('File harus berupa gambar'));
    }
};
export const middlewareUpload = multer({ storage,fileFilter });