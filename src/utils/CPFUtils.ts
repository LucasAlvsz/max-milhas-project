const formatCpf = (cpf: string) => {
	return cpf.replace(/[^\d]/g, "")
}

const validateCpfPattern = (cpf: string) => {
	const CPF_REGEX = /^[0-9]{11}/

	if (!CPF_REGEX.test(cpf)) return false

	return true
}

const calculateCpfCheckSum = (cpfArray: string[], count: number): number => {
	return cpfArray.reduce((acc, digit: string) => {
		acc += parseInt(digit) * count
		count--
		return acc
	}, 0)
}

const validateDigit = (checkedSum: number, digit: number) => {
	const remainder = checkedSum % 11
	const calculatedDigit = remainder < 2 ? 0 : 11 - remainder
	return calculatedDigit === digit ? digit : null
}

export default {
	formatCpf,
	validateCpfPattern,
	calculateCpfCheckSum,
	validateDigit,
}
