import { CPFFactory } from "@/../tests/factories"
import { InvalidCpfException } from "@/errors"
import CPFService from "../CPFService"

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
		expect(() => CPFService.validateCPF(cpf)).toThrow(InvalidCpfException)
	})
})
