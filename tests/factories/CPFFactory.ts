import { faker } from "@faker-js/faker"
import { CPFUtils } from "@/utils"
import { RestrictedCPF } from "@prisma/client"

const generateValidCPF = () => {
	const cpfArray = faker.random.numeric(9).split("")
	let checkedSum = CPFUtils.calculateCpfCheckSum(cpfArray, 10)
	const firstDigit = checkedSum % 11 < 2 ? 0 : 11 - (checkedSum % 11)
	cpfArray.push(firstDigit.toString())
	checkedSum = CPFUtils.calculateCpfCheckSum(cpfArray, 11)
	const secondDigit = checkedSum % 11 < 2 ? 0 : 11 - (checkedSum % 11)
	cpfArray.push(secondDigit.toString())
	return cpfArray.join("")
}

const generateInvalidCPF = () => {
	return faker.random.alphaNumeric(11)
}

const generateCPFData = (overrides?: Partial<RestrictedCPF>): RestrictedCPF => {
	return {
		cpf: generateValidCPF(),
		id: parseInt(faker.random.numeric()),
		createdAt: faker.date.past(),
		...overrides,
	}
}

export default {
	generateValidCPF,
	generateInvalidCPF,
	generateCPFData,
}
