var  bodyParser = require('body-parser')
    ,http = require('http')
    ,express = require('express')
    ,socketio = require('socket.io')
    ,path = require( 'path' )
    ,tiendaJeff = require('./Tienda');

    var port = port = process.env.PORT || 3000
    ,app_root = __dirname
    ,app = express()
    ,Server = http.createServer(app);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(express.static(path.join(__dirname, '../src')));
    app.use('/tiendaJeffBk', tiendaJeff);

    Server.listen(port, function(){
      console.log("Servidor funcionando en puerto: " + port);
    });
