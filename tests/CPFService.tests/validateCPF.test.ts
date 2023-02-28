import { CPFUtils } from "../../src/utils"
import { CPFFactory } from "../factories"
import { InvalidCpfException } from "../../src/errors"
import CPFService from "../../src/services/CPFService"

beforeEach(() => {
	jest.resetModules()
	jest.clearAllMocks()
})

describe("validateCPF", () => {
	it("should validate a valid CPF", () => {
		const cpf = CPFFactory.generateValidCPF()
		CPFService.validateCPF(cpf)
	})
	it("should throw an error if CPF is invalid", () => {
		const cpf = CPFFactory.generateInvalidCPF()

		jest.spyOn(CPFUtils, "formatCpf").mockReturnValue(cpf)
		jest.spyOn(CPFUtils, "calculateCpfCheckSum").mockReturnValue(1)
		jest.spyOn(CPFUtils, "validateCpfPattern").mockReturnValue(true)
		jest.spyOn(CPFUtils, "validateDigit").mockReturnValue(null)

		expect(() => CPFService.validateCPF(cpf)).toThrow(InvalidCpfException)
	})
})
