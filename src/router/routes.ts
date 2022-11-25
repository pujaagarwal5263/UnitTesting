var express=require("express");

const router=express.Router();

const {adduser,getuser,getByid,updateByid,deleteByid}=require("../controllers/dataController")

router.get("/getuser",getuser);
router.get("/getbyid/:id",getByid);

router.put("/updatebyid/:id",updateByid)

router.post("/adduser",adduser)

router.delete("/deletebyid/:id",deleteByid)

export default router;