/*
  Warnings:

  - Added the required column `specailityId` to the `Graduetes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Graduetes" ADD COLUMN     "specailityId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Specialties" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,

    CONSTRAINT "Specialties_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Specialties_name_key" ON "Specialties"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Specialties_shortName_key" ON "Specialties"("shortName");

-- AddForeignKey
ALTER TABLE "Graduetes" ADD CONSTRAINT "Graduetes_specailityId_fkey" FOREIGN KEY ("specailityId") REFERENCES "Specialties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
