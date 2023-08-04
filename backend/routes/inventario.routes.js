import Router from "express"

const router = Router()

import { borrar, get, postInven } from "../controllers/inventario.controller.js"

router.get("/", get)

router.post("/", postInven)

router.delete("/:id", borrar)

router.patch("/:id")

export default router