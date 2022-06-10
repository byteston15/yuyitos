const Rubro =  require("../Models/Rubro");

exports.createCategoria = async(req, res, next) => {
   try{
    const rubro = await Rubro.create(req.body);
    res.status(201).json({
        success : true, 
        message : `Rubro ${req.body.nombre} created`
    });
   }catch(err){
    res.status(500).json({
        success : false, 
        message : err.message
    })
   } 
};

exports.getCategoria = async(req, res, next) => {
    try {
        const rubro = await Rubro.findByPk(req.params.id);
        res.status(200).json({
            success : true,
            data : rubro
        })
    } catch (error) {
       res.status(500).json({
        success : false, 
        message : error.message
       }) 
    }
}

exports.getCategorias = async(req, res, next) => {
    try {
        const rubro = await Rubro.findAll();
        res.status(200).json({
            success : true, 
            data : rubro
        })
    } catch (error) {
        res.status(500).json({
            success : false, 
            message : error.message
        })
    }
}

exports.deleteCategoria = async(req, res, next) => {
    try {
      const rubro = await Rubro.destroy({where : {id : req.params.id}})  
      res.status(200).json({success : true, data : rubro});
    } catch (error) {
       res.status(500).json({
        success : false, 
        message : error.message
       }) 
    }
}

exports.updateCategoria = async(req, res, next)=>{
    try {
        const rubro =  await Rubro.update(req.body, {
            where : {id : req.params.id}
        });
        res.status(200).json({
            success : true, 
            data : req.body
        })
    } catch (error) {
        res.status(500).json({
            success : true, 
            message : error.message
        })
    } 
}