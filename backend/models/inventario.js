import mongoose from "mongoose";

const inventarioSchema = mongoose.Schema({
    nombre:{
        type:String,
        requiered:true,
        trim:true
    },
    descripcion:{
        type:String,
        requiered:true,
        trim:true
    },
    categoria:{
        type:String,
        requiered:true,
        trim:true,
    },
    cantidad:{
        type:Number,
        requiered:true,
        trim:true
    }
},
{
    timestamps:true
})

const Inventario = mongoose.model("inventario", inventarioSchema)

export default Inventario