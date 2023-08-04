import mongoose from "mongoose";

const HistorialInvenSchema = mongoose.Schema({
    nombre:{
        type: String,
        requied:true,
        trim:true
    },
    empleado:{
        type:Number,
        requied:true,
        trim:true
    },
    cantidad: {
        type:Number,
        requied: true,
        trim: true
    }

},
{
    timestamps:true
})

const HistorialInven = mongoose.model("historialInventario", HistorialInvenSchema)

export default HistorialInven