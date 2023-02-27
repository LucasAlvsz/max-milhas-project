-- CreateTable
CREATE TABLE "restricted_cpf" (
    "id" SERIAL NOT NULL,
    "cpf" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "restricted_cpf_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "restricted_cpf_cpf_key" ON "restricted_cpf"("cpf");
