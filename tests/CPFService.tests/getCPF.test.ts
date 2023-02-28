import { CPFRepository } from "@/respositories"
import { InvalidCpfException, NotFoundCpfException } from "../../src/errors"
import { CPFService } from "../../src/services"
import { CPFFactory } from "../factories"

beforeEach(() => {
	jest.resetModules()
	jest.clearAllMocks()
})

describe("getCPF", () => {
	it("should return cpf data", async () => {
		const cpf = CPFFactory.generateCPFData()

		// eslint-disable-next-line @typescript-eslint/no-empty-function
		jest.spyOn(CPFService, "validateCPF").mockImplementation(() => {})
		jest.spyOn(CPFService, "cpfExists").mockResolvedValue(cpf)
		jest.spyOn(CPFRepository, "getByCPF").mockResolvedValue(cpf)

		const result = await CPFService.getCPF(cpf.cpf)
		expect(result).toEqual({
			cpf: cpf.cpf,
			createdAt: cpf.createdAt,
		})
	})

	it("shoult throw InvalidCpfException if cpf is invalid", async () => {
		const cpf = CPFFactory.generateInvalidCPF()

		// eslint-disable-next-line @typescript-eslint/no-empty-function
		jest.spyOn(CPFService, "validateCPF").mockImplementation(() => {
			throw new InvalidCpfException("CPF is not valid.")
		})
		jest.spyOn(CPFService, "cpfExists").mockResolvedValue(undefined)

		await expect(CPFService.getCPF(cpf)).rejects.toBeInstanceOf(
			InvalidCpfException
		)
		expect(CPFService.cpfExists).toHaveBeenCalledTimes(0)
	})

	it("shoult throw NotFoundCpfException if cpf is not found", async () => {
		const cpf = CPFFactory.generateValidCPF()

		// eslint-disable-next-line @typescript-eslint/no-empty-function
		jest.spyOn(CPFService, "validateCPF").mockImplementation(() => {})
		jest.spyOn(CPFService, "cpfExists").mockResolvedValue(false)
		jest.spyOn(CPFRepository, "getByCPF").mockResolvedValue(undefined)

		await expect(CPFService.getCPF(cpf)).rejects.toBeInstanceOf(
			NotFoundCpfException
		)
	})
})
