import mongoose from "mongoose"

const conectarDB = async () =>{
    try {
        const connectionDB = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        });

        const url = `Conexion Exitosa, Server: ${connectionDB.connection.host}`
        console.log(url);
    } catch (error) {
        console.log(`${error.message}`);
        process.exit(1);
    }
}

export default conectarDB