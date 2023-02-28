import { CPFService } from "../../src/services"
import { CPFRepository } from "../../src/respositories"
import { CPFFactory } from "../factories"

beforeEach(() => {
	jest.resetModules()
	jest.clearAllMocks()
})

describe("getAllCPFs", () => {
	it("should return all CPFs", async () => {
		const cpfData = CPFFactory.generateCPFData()
		delete cpfData.id

		jest.spyOn(CPFRepository, "getAll").mockResolvedValue([cpfData])

		const cpfList = await CPFService.getAllCPFs()

		expect(cpfList).toEqual([cpfData])
		expect(CPFRepository.getAll).toHaveBeenCalledTimes(1)
	})

	it("should return an empty array if there are no CPFs", async () => {
		jest.spyOn(CPFRepository, "getAll").mockResolvedValue([])

		const cpfList = await CPFService.getAllCPFs()
		expect(cpfList).toEqual([])
		expect(CPFRepository.getAll).toHaveBeenCalledTimes(1)
	})
})
