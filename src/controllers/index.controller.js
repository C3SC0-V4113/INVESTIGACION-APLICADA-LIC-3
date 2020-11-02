const indexCtrl={};

indexCtrl.renderIndex=(request,response)=>{
    response.render("index")
}

indexCtrl.renderPC=(request,response)=>{
    response.render("os")
}

module. exports=indexCtrl;