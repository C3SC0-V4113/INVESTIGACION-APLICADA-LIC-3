const {Router}=require("express");
const router=Router();

const { renderIndex, renderPC, renderPanas }=require("../controllers/index.controller")

/*Para la ruta principal */
router.get("/", renderIndex);

router.get("/about", renderPC );

router.get("/panas", renderPanas);

module.exports=router;