/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Workes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `graduetes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Rewiews" DROP CONSTRAINT "Rewiews_graduateId_fkey";

-- DropForeignKey
ALTER TABLE "Workes" DROP CONSTRAINT "Workes_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Workes" DROP CONSTRAINT "Workes_graduateId_fkey";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "Workes";

-- DropTable
DROP TABLE "graduetes";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "createdAT" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAT" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Graduetes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "patronymic" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "Graduetes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workers" (
    "id" SERIAL NOT NULL,
    "graduateId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,
    "statusWork" BOOLEAN NOT NULL,

    CONSTRAINT "Workers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Graduetes_email_key" ON "Graduetes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Graduetes_phone_key" ON "Graduetes"("phone");

-- AddForeignKey
ALTER TABLE "Rewiews" ADD CONSTRAINT "Rewiews_graduateId_fkey" FOREIGN KEY ("graduateId") REFERENCES "Graduetes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workers" ADD CONSTRAINT "Workers_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workers" ADD CONSTRAINT "Workers_graduateId_fkey" FOREIGN KEY ("graduateId") REFERENCES "Graduetes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
