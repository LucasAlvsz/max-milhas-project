import { ExistsCpfException, InvalidCpfException } from "@/errors"
import { CPFRepository } from "@/respositories"
import { CPFFactory } from "../../../tests/factories"
import CPFService from "../CPFService"

beforeEach(() => {
	jest.resetModules()
	jest.clearAllMocks()
})

describe("CPFService", () => {
	describe("createCPF", () => {
		it("should create a CPF", async () => {
			const cpf = CPFFactory.generateValidCPF()
			const cpfData = CPFFactory.generateCPFData({ cpf })

			jest.spyOn(CPFRepository, "create").mockResolvedValue(cpfData)
			jest.spyOn(CPFRepository, "getByCPF").mockResolvedValue(undefined)
			// eslint-disable-next-line @typescript-eslint/no-empty-function
			jest.spyOn(CPFService, "validateCPF").mockImplementation(() => {})
			jest.spyOn(CPFService, "cpfExists").mockResolvedValue(false)

			await CPFService.createCPF(cpf)
			expect(CPFRepository.create).toHaveBeenCalledTimes(1)
			expect(CPFRepository.create).toHaveBeenCalledWith(cpf)
		})

		it("should not create a CPF with invalid pattern", async () => {
			const cpf = CPFFactory.generateInvalidCPF()

			jest.spyOn(CPFService, "validateCPF").mockImplementation(() => {
				throw new InvalidCpfException("CPF is not valid.")
			})
			jest.spyOn(CPFRepository, "create").mockResolvedValue(undefined)
			jest.spyOn(CPFService, "cpfExists").mockResolvedValue(false)

			await expect(CPFService.createCPF(cpf)).rejects.toBeInstanceOf(
				InvalidCpfException
			)
			expect(CPFService.cpfExists).toHaveBeenCalledTimes(0)
			expect(CPFRepository.create).toHaveBeenCalledTimes(0)
		})

		it("should not create a CPF that already exists", async () => {
			const cpf = CPFFactory.generateValidCPF()
			const existingCPF = CPFFactory.generateCPFData({ cpf })

			// eslint-disable-next-line @typescript-eslint/no-empty-function
			jest.spyOn(CPFService, "validateCPF").mockImplementation(() => {})
			jest.spyOn(CPFService, "cpfExists").mockResolvedValue(existingCPF)
			jest.spyOn(CPFRepository, "getByCPF").mockResolvedValue(existingCPF)
			jest.spyOn(CPFRepository, "create").mockResolvedValue(undefined)

			await expect(CPFService.createCPF(cpf)).rejects.toBeInstanceOf(
				ExistsCpfException
			)
			expect(CPFRepository.create).toHaveBeenCalledTimes(0)
		})
	})
})
