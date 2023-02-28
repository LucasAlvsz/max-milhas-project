import {
	ExistsCpfException,
	InvalidCpfException,
	NotFoundCpfException,
} from "@/errors"
import { CPFRepository } from "@/respositories"
import { CPFUtils } from "@/utils"

const createCPF = async (cpf: string) => {
	validateCPF(cpf)
	if (await cpfExists(cpf))
		throw new ExistsCpfException("CPF already exists.")

	await CPFRepository.create(cpf)
}

const validateCPF = (cpf: string) => {
	if (!CPFUtils.validateCpfPattern(cpf))
		throw new InvalidCpfException("CPF is not valid.")

	const formattedCpf = CPFUtils.formatCpf(cpf)
	const formattedCpfForValidation = formattedCpf.slice(0, 9).split("")

	let checkedSum = CPFUtils.calculateCpfCheckSum(
		formattedCpfForValidation,
		10
	)
	const firstDigit = CPFUtils.validateDigit(
		checkedSum,
		parseInt(formattedCpf[9])
	)
	if (firstDigit === null) throw new InvalidCpfException("CPF is not valid.")

	formattedCpfForValidation.push(firstDigit.toString())
	checkedSum = CPFUtils.calculateCpfCheckSum(formattedCpfForValidation, 11)
	const secondDigit = CPFUtils.validateDigit(
		checkedSum,
		parseInt(formattedCpf[10])
	)
	if (secondDigit === null) throw new InvalidCpfException("CPF is not valid.")
}

const cpfExists = async (cpf: string) => {
	const storedCPF = await CPFRepository.getByCPF(cpf)
	return storedCPF || false
}

const getCPF = async (cpf: string) => {
	validateCPF(cpf)
	const storedCPF = await cpfExists(cpf)
	if (!storedCPF) throw new NotFoundCpfException("CPF not found.")

	return {
		cpf: storedCPF.cpf,
		createdAt: storedCPF.createdAt,
	}
}

const deleteCPF = async (cpf: string) => {
	validateCPF(cpf)
	const storedCPF = await cpfExists(cpf)
	if (!storedCPF) throw new NotFoundCpfException("CPF not found.")
	await CPFRepository.remove(cpf)
}
export default {
	createCPF,
	validateCPF,
	cpfExists,
	getCPF,
	deleteCPF,
}
