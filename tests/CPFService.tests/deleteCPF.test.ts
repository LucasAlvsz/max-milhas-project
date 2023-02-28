import { CPFService } from "../../src/services"
import { CPFRepository } from "../../src/respositories"
import { CPFFactory } from "../factories"
import { NotFoundCpfException } from "../../src/errors"

beforeEach(() => {
	jest.resetModules()
	jest.clearAllMocks()
})

describe("deleteCpf", () => {
	it("should delete a CPF", async () => {
		const cpf = CPFFactory.generateValidCPF()
		const cpfData = CPFFactory.generateCPFData({ cpf })

		jest.spyOn(CPFService, "validateCPF").mockImplementation()
		jest.spyOn(CPFService, "cpfExists").mockResolvedValue(cpfData)
		jest.spyOn(CPFRepository, "getByCPF").mockResolvedValue(cpfData)
		jest.spyOn(CPFRepository, "remove").mockResolvedValue(cpfData)

		await CPFService.deleteCPF(cpf)

		expect(CPFRepository.remove).toHaveBeenCalledTimes(1)
		expect(CPFRepository.remove).toHaveBeenCalledWith(cpf)
	})

	it("should throw an error if CPF does not exists", async () => {
		const cpf = CPFFactory.generateValidCPF()

		jest.spyOn(CPFService, "validateCPF").mockImplementation()
		jest.spyOn(CPFService, "cpfExists").mockResolvedValue(false)
		jest.spyOn(CPFRepository, "getByCPF").mockResolvedValue(undefined)

		await expect(CPFService.deleteCPF(cpf)).rejects.toBeInstanceOf(
			NotFoundCpfException
		)
	})
})
