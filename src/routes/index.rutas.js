const {Router}=require("express");
const router=Router();

const { renderIndex, renderPC }=require("../controllers/index.controller")

/*Para la ruta principal */
router.get("/", renderIndex);

router.get("/pc", renderPC );


module.exports=router;