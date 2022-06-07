/*
  Warnings:

  - Added the required column `rewiew` to the `Rewiews` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rewiews" ADD COLUMN     "rewiew" TEXT NOT NULL;
