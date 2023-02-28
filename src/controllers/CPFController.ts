import { CPFService } from "@/services"
import { Request, Response } from "express"

const createCFP = async (req: Request, res: Response) => {
	const { cpf } = req.body

	await CPFService.createCPF(cpf)

	return res.sendStatus(201)
}

const getCPF = async (req: Request, res: Response) => {
	const { cpf } = req.params
	const cpfData = await CPFService.getCPF(cpf)
	return res.send(cpfData)
}

const deleteCPF = async (req: Request, res: Response) => {
	const { cpf } = req.params
	await CPFService.deleteCPF(cpf)
	return res.sendStatus(204)
}

const getAllCPFs = async (req: Request, res: Response) => {
	const cpfData = await CPFService.getAllCPFs()
	return res.send(cpfData)
}

export default {
	createCFP,
	getCPF,
	deleteCPF,
	getAllCPFs,
}
