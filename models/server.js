const express = require('express')
const cors = require('cors')


class Server {

    constructor(){

        this.app = express();
        this.port = process.env.PORT;
        this.usariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();
       
        // Rutas de mi app
        this.routes();

    }

    middlewares() {
        // cors
        this.app.use(cors());

        // lectura y parseo del body
        this.app.use( express.json());

        // Directorio publico
        this.app.use( express.static('public') );
    }

    routes() {
        
        this.app.use(this.usariosPath, require('../routes/usuarios'));

    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}


module.exports = Server;