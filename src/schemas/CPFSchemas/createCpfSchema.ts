import Joi from "joi"

import { CreateCPFBody } from "@/types/CPFTypes"

const bodySchema = Joi.object<CreateCPFBody>({
	cpf: Joi.string().required(),
}).options({ allowUnknown: false })

const createCpfSchema = Joi.object({
	body: bodySchema,
}).options({ allowUnknown: true })

export default createCpfSchema
