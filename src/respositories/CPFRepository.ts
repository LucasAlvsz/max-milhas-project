import { prisma } from "@/config"

const create = async (cpf: string) => {
	return await prisma.restrictedCPF.create({ data: { cpf } })
}

const getByCPF = async (cpf: string) => {
	return await prisma.restrictedCPF.findUnique({ where: { cpf } })
}

const remove = async (cpf: string) => {
	return await prisma.restrictedCPF.delete({ where: { cpf } })
}

export default { create, getByCPF, remove }
