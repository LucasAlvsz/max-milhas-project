import "express-async-errors"
import { Router } from "express"

import CPFRouter from "./CPFRouter"
import { handleError } from "@/middlewares"

const router = Router()

router
	.get("/health", (req, res) => res.send("OK"))
	.use("/cpf", CPFRouter)
	.use(handleError)

export default router
