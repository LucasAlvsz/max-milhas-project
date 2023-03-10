import Joi from "joi"
import cpfSchema from "./cpfSchema"

const paramsSchema = Joi.object({
	cpf: cpfSchema,
}).options({ allowUnknown: false })

const cpfParamsSchema = Joi.object({
	params: paramsSchema,
}).options({ allowUnknown: true })

export default cpfParamsSchema
