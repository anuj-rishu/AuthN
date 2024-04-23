const express =require("express")
const router =express.Router();
const {auth , isStudent , isAdmin} =require("../middlewares/auth")
const {login, signup} = require("..//controllers/auth")
router.post("/login" ,login)
router.post("/signup" ,signup);


// testing route
router.get("/test" , auth , (req, res)=>{
    res.json({
        success: true,
        message: "welcome to test page"
    })
})
//protected routes
router.get("/student" , auth ,isStudent , (req, res)=>{
    res.json({
        success: true,
        message: "welcome to sudent page"
    })
})
router.get("/admin" , auth ,isAdmin , (req, res)=>{
    res.json({
        success: true,
        message: "welcome to Admin page"
    })
})


module.exports = router;
