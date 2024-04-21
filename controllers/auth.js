const bycrpt = require("bcrypt")
const User = require("../model/user");
exports.signup = async (req,res)=>{
    try{
        const {name ,email ,password ,role}= req.body;
        const existinhUser= await User.findOne({email});
        if(existinhUser){
            return res.status(400).json({
                success:false,
                message: "user is already exist"
            })
        }
        let hashedPassword;
        try{
            hashedPassword = await bycrpt.hash(password,10)

        }
        catch(err){
            return res.status(500).json({
                success:false,
                message: "error in hashig password"
            })
        }
        const user = await User.create({
            name,email,password:hashedPassword,role
        })
        return res.status(200).json({
            success: true,
            message: "user creation done"
        })


    }
    catch(error){
      
console.error(error);
return res.status(500).json({
    success:false,
    message: "user can not be registered"
})
    }
}
