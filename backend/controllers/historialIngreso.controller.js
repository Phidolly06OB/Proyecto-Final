import HistorialInven from "../models/historialIngreso.js";

const get = async (req, res) =>{
    try {
        const historial = await HistorialInven.find()

        res.json(historial)
    } catch (error) {
        console.log(error);
    }
}

const newHistorial = async (req, res) =>{
    try {
        const historial = await new HistorialInven(req.body)
        historial.save()

        res.jsom(historial)
    } catch (error) {
        
    }
}


export {
    get,
    newHistorial
}