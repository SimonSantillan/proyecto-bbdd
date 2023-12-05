const Certificador = require("../models/Certificador");

const insertController = {
  insertWithBody: async function (req, res) {
    
    console.log(req.body);

    const { 
      fecha,
      hora,
      analista,
      titulo_dominio,
      descripcion_tags,
      id,
      presentacion_tags_checked,
      id_img,
      url_publi,
      url_picture
    } = req.body;

    console.log('req.body', req.body)

   try {
      await Certificador.create({
        fecha,
        hora,
        analista,
        titulo_dominio,
        descripcion_tags,
        id,
        presentacion_tags_checked,
        id_img,
        url_publi,
        url_picture
      });
      res.status(200).json({
        status: 200,
        msg: 'Inserción realizada',
      });
    } catch (error) {
        
        console.log(error.message)
        res.status(404).json({
          status: 404,
          error: error.message,
        });
    } 
  
  },
  insertWithQuery: async function(req,res){

    console.log(req.query);

    const { 
      fecha,
      hora,
      analista,
      titulo_dominio,
      descripcion_tags,
      id,
      presentacion_tags_checked,
      id_img,
      url_publi,
      url_picture
    } = req.query;

    console.log('req.params', req.query)

    try {
      await Certificador.create({
        fecha,
        hora,
        analista,
        titulo_dominio,
        descripcion_tags,
        id,
        presentacion_tags_checked,
        id_img,
        url_publi,
        url_picture
      });
      res.status(200).json({
        status: 200,
        msg: 'Inserción realizada',
      });
    } catch (error) {
      res.status(404).json({
        status: 404,
        error: error.message,
      });
    } 
    /* res.status(200).json({
      status: 200,
      msg: '.....',
    }); */

  }
}

module.exports = insertController;