/*
  Warnings:

  - A unique constraint covering the columns `[graduateId,companyId]` on the table `Workers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Workers_graduateId_companyId_key" ON "Workers"("graduateId", "companyId");
