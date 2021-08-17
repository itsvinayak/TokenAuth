const {createUser,deleteUser,updateUser,getUserByUserId,getUsers, login,SignUp} = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation")
router.post("/",checkToken,createUser);
router.get("/",checkToken,getUsers);
router.get("/:id",checkToken,getUserByUserId);
router.patch("/",checkToken,updateUser);
router.delete("/",checkToken,deleteUser);
router.post("/login",login);
router.post("/sign-up",SignUp);
module.exports = router;

