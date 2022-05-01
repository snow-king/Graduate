/*
  Warnings:

  - You are about to drop the column `webAdress` on the `Companies` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[webAddress]` on the table `Companies` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `webAddress` to the `Companies` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Companies_webAdress_key";

-- AlterTable
ALTER TABLE "Companies" DROP COLUMN "webAdress",
ADD COLUMN     "webAddress" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Companies_webAddress_key" ON "Companies"("webAddress");
