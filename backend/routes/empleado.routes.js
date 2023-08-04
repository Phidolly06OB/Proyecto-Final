import Router from "express"

import { borrar, getEmplados, newEmpleado } from "../controllers/empleados.controller.js"

const router = Router()

router.get("/", getEmplados)

router.post("/", newEmpleado);

router.delete("/:id", borrar)

export default router