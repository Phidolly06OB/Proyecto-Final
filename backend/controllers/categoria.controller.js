import Categoria from "../models/categorias.js";

const getCateg = async (req, res) =>{
    try {
        
        const datos = await Categoria.find()

        res.json(datos)

    } catch (error) {
        console.log(error);
    }
}

const borrar = async (req, res) =>{
    try {
        await Categoria.deleteOne({_id:req.params.id})
        res.send();

    } catch (error) {
        console.log(error);
    }
}

const postCateg = async (req, res) =>{
    try {
        const newCateg = await new Categoria(req.body)
        newCateg.save()

        res.json(newCateg)
    } catch (error) {
        console.log(error);
    }
}

export {getCateg, postCateg, borrar}