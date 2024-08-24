const multer = require ("multer");
const Path= require ("path");

const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null, "./uploads/categories")

    },
    filename:function(req,file,cb) {
        cb(null,Date.now()+ "-" +file.originalname);
    }
});

const fileFilter = (req,file,callback) => {
    const accExt = [".png", ".jpg", ".jpeg"];
    if(!accExt.includes(Path.extname(file.originalname))){
        return callback(new Error("Wrong Format"));
    }

    const fileSize = parseInt(req.headers["content-length"]);
    if(fileSize > 1048576) {
        return callback(new Error("File Size Too Big"));
    }

    callback(null, true);
};

let upload = multer ({
    storage: storage,
    fileFilter:fileFilter,
    fileSize:1048576

});

module.exports = upload.single("categoryImage")