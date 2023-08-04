const newEgreso = async (req, res) =>{
    try {
        const {nombre,descripccion, categoria, cantidad } = req.body
        const iventa = new Inventario({nombre, descripccion, categoria, cantidad})
        const historial = new HistorialInven({cantidad})
        
        await iventa.save()
        await historial.save()

        res.json({iventa, historial})
    } catch (error) {
        
    }
}