import Router from "express"
import { borrar, getCateg, postCateg } from "../controllers/categoria.controller.js"
const router = Router()

router.get("/", getCateg);

router.delete("/:id", borrar)

router.post("/", postCateg)

export default router