import { ExistsCpfException, InvalidCpfException } from "@/errors"
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

export default {
	createCPF,
}
