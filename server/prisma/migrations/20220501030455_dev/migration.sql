/*
  Warnings:

  - You are about to drop the column `specailityId` on the `Graduetes` table. All the data in the column will be lost.
  - You are about to drop the `Specialties` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `specialtyId` to the `Graduetes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Graduetes" DROP CONSTRAINT "Graduetes_specailityId_fkey";

-- AlterTable
ALTER TABLE "Graduetes" DROP COLUMN "specailityId",
ADD COLUMN     "specialtyId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Specialties";

-- CreateTable
CREATE TABLE "specialties" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,

    CONSTRAINT "specialties_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "specialties_name_key" ON "specialties"("name");

-- CreateIndex
CREATE UNIQUE INDEX "specialties_shortName_key" ON "specialties"("shortName");

-- AddForeignKey
ALTER TABLE "Graduetes" ADD CONSTRAINT "Graduetes_specialtyId_fkey" FOREIGN KEY ("specialtyId") REFERENCES "specialties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
