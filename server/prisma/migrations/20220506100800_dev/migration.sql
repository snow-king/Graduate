/*
  Warnings:

  - You are about to drop the column `address` on the `Companies` table. All the data in the column will be lost.
  - You are about to drop the column `cityId` on the `Companies` table. All the data in the column will be lost.
  - Added the required column `addressId` to the `Companies` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Companies" DROP CONSTRAINT "Companies_cityId_fkey";

-- AlterTable
ALTER TABLE "Companies" DROP COLUMN "address",
DROP COLUMN "cityId",
ADD COLUMN     "addressId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "address" (
    "id" SERIAL NOT NULL,
    "cityId" INTEGER NOT NULL,
    "street" TEXT NOT NULL,
    "region" TEXT NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Companies" ADD CONSTRAINT "Companies_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "Cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
