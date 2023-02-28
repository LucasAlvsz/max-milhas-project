import Joi from "joi"

import { CreateCPFBody } from "@/types/CPFTypes"
import cpfSchema from "./cpfSchema"

const bodySchema = Joi.object<CreateCPFBody>({
	cpf: cpfSchema,
}).options({ allowUnknown: false })

const createCpfSchema = Joi.object({
	body: bodySchema,
}).options({ allowUnknown: true })

export default createCpfSchema
