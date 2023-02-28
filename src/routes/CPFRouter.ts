import { Router } from "express"

import { CPFSchemas } from "@/schemas"
import { CPFController } from "@/controllers"
import { validateSchema } from "@/middlewares"

const CPFRouter = Router()

CPFRouter.post(
	"",
	validateSchema(CPFSchemas.createCpfSchema),
	CPFController.addCpfOnRestrictedList
)

export default CPFRouter