const indexCtrl={};

indexCtrl.renderIndex=(request,response)=>{
    response.render("index")
}

indexCtrl.renderPC=(request,response)=>{
    response.render("os")
}

indexCtrl.renderPanas=(request,response)=>{
    response.render("grupo")
}

module. exports=indexCtrl;