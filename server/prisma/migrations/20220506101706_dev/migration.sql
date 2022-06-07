/*
  Warnings:

  - You are about to drop the `regions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `specialties` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_regionID_fkey";

-- DropForeignKey
ALTER TABLE "Graduetes" DROP CONSTRAINT "Graduetes_specialtyId_fkey";

-- DropTable
DROP TABLE "regions";

-- DropTable
DROP TABLE "specialties";

-- CreateTable
CREATE TABLE "Regions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Regions_pkey" PRIMARY KEY ("id")
);

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
ALTER TABLE "Graduetes" ADD CONSTRAINT "Graduetes_specialtyId_fkey" FOREIGN KEY ("specialtyId") REFERENCES "Specialties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_regionID_fkey" FOREIGN KEY ("regionID") REFERENCES "Regions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
