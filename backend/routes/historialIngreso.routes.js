import Router from "express"

const router = Router()

import {get, newHistorial} from "../controllers/historialIngreso.controller.js"

router.get("/", get)

router.post("/", newHistorial)

export default router