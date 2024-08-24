function errorHandler(err,req,res,next) {
    if(typeof err === "string"){
        //custom app error
        return res.status(400).json({message:err});

    }

    if(err.name === "ValidationError"){
        //mongoose validation error
        return res.status(400).json({ message:err.message});
    }

    if(err.name === "UnauthorizedError"){
        //jwt
        return res.status(401).json({message:"Token Invalid"});
    }

    return res.status(500).json({message: err.message});
}

module.exports = {
    errorHandler,
};