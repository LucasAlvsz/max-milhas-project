import { CPFRepository } from "../../src/respositories"
import { CPFFactory } from "../factories"
import CPFService from "../../src/services/CPFService"

beforeEach(() => {
	jest.resetModules()
	jest.clearAllMocks()
})

describe("cpfExists", () => {
	it("should return a CPF if it exists", async () => {
		const cpf = CPFFactory.generateValidCPF()
		const cpfData = CPFFactory.generateCPFData({ cpf })

		jest.spyOn(CPFRepository, "getByCPF").mockResolvedValue(cpfData)

		await CPFService.cpfExists(cpf)
		expect(CPFRepository.getByCPF).toHaveBeenCalledTimes(1)
		expect(CPFRepository.getByCPF).toHaveBeenCalledWith(cpf)
	})
	it("should return false if it does not exist", async () => {
		const cpf = CPFFactory.generateInvalidCPF()

		jest.spyOn(CPFRepository, "getByCPF").mockResolvedValue(undefined)

		const cpfExists = await CPFService.cpfExists(cpf)
		expect(cpfExists).toBe(false)
		expect(CPFRepository.getByCPF).toHaveBeenCalledTimes(1)
		expect(CPFRepository.getByCPF).toHaveBeenCalledWith(cpf)
	})
})
