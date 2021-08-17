const {verify, decode} = require("jsonwebtoken");

module.exports = {
    checkToken: (req, res, next)=>{
        let token = req.get("authorization");
        if(token){
            token = token.slice(7);
            verify(token,"qwe1234", (error, decoded)=>{
                if(error){
                    res.json({
                        success:0,
                        message:"Invalid Token"
                    });
                }
                else{
                    next();
                }
            });

        }
        else{
            res.json({
                success:0,
                message: "Access denied , unauthorized user"
            });
        }
    }
}