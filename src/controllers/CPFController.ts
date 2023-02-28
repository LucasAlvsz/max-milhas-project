import { CPFService } from "@/services"
import { Request, Response } from "express"

const addCpfOnRestrictedList = async (req: Request, res: Response) => {
	const { cpf } = req.body

	await CPFService.createCPF(cpf)

	return res.sendStatus(201)
}

export default {
	addCpfOnRestrictedList,
}
