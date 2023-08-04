import mongoose from "mongoose";

const empleadosSchema = mongoose.Schema({
    nombre:{
        type:String,
        requiered:true,
        trim:true
    },
    edad:{
        type:Number,
        requiered:true,
        trim:true
    },
    documento:{
        type:String,
        requiered:true,
        trim:true
    }
},
{
    timestamps:true
})

const Empleados = mongoose.model("empleado", empleadosSchema)

export default Empleados