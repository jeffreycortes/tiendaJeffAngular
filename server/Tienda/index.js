var bodyParser = require("body-parser")
    ,htpp = require("http")
    ,express = require("express")
    ,Router = express.Router()
    ,Operaciones = require('../CarritoCrud.js');

    Router.use(function(req, res, next) {
      // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
      next();
    });

    Router.post('/Login', function(req, resp){
      var user = req.body.user;
      var pass = req.body.pass;
      Operaciones.login(user, pass, function(error, result){
        if(error) console.log("Error en creación de usuario");
        resp.json({"msg": result});
      })
    });

    Router.post('/Logout', function(req, resp){
      var user = req.body.user;
      var pass = req.body.pass;
      resp.json({"msg": "Validado", "user": `"${user} - ${pass}"`});
    })

    Router.get('/Items/', function(req, resp){
      Operaciones.consultarItems(null, "fullData",function(error, items){
        if(error) console.log("Error en consultar y actualizar ->" + error);
        resp.json(items);
      })
    })

    Router.get('/Items/search/:name', function(req, resp){
      var textSearch = req.params.name;
      Operaciones.consultarItems(textSearch, "nombre",function(error, items){
        if(error) console.log("Error en consultar y actualizar ->" + error);
        resp.json(items);
      })
    })

    Router.get('/Items/id/:idItem', function(req, resp){
      var idItem = req.params.idItem;
      Operaciones.consultarItems(idItem, "_id", function(error, items){
        if(error) console.log("Error en consultar y actualizar ->" + error);
        resp.json(items);
      })
    })

    Router.post('/Item/update', function(req, resp){
      var item = {
          id: req.body.id
          ,unidades: req.body.unidades
        };

      Operaciones.actualizarItem(item, function(error, result){
        if(error)console.log("Error actualizar item -> " + error)
        console.log("Registro actualizado!");
        resp.json({msg: result});
      });

    })

    module.exports = Router;
