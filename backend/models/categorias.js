import mongoose from "mongoose";

const categoriaSchema = mongoose.Schema({
    nombre:{
        type:String,
        requiered:true,
        trim:true
    },
    descripcion:{
        type:String,
        requiered:true,
        trim:true
    }
},
{
    timestamps:true
}       
);

const Categoria = mongoose.model("categoria", categoriaSchema);

export default Categoria