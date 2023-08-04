import cors from "cors"
import express from "express"
import conectarDB from "../config/database.js"

import routerCategorias from "../routes/categoria.routes.js";
import routerInventario from "../routes/inventario.routes.js";
import routerEmpleado from "../routes/empleado.routes.js"
import routerHistorialInv from "../routes/historialIngreso.routes.js"
import routerSearch from "../routes/search.routes.js"

class Server{

    constructor(){
        this.app = express();
        this.mongoDB();
        this.port = process.env.PORT;

        this.categPatch = "/categoria"
        this.invenPatch = "/inventario"
        this.EmpleadoPatch = "/empleado"
        this.HistorialInvePatch = "/historialInv"
        this.SearchPatch = "/search"


        this.middlewar();

        this.routes();


    }


    middlewar(){
        this.app.use(cors())
        this.app.use(express.json())
    }

    async mongoDB(){
        await conectarDB()
    }

    routes(){
        this.app.use(this.categPatch, routerCategorias);
        this.app.use(this.invenPatch, routerInventario);
        this.app.use(this.EmpleadoPatch, routerEmpleado);
        this.app.use(this.HistorialInvePatch, routerHistorialInv);
        this.app.use(this.SearchPatch, routerSearch);
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`lsiten on port ${this.port}`);
        })
    }

}

export default Server