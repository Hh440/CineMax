/*
  Warnings:

  - You are about to drop the column `startAt` on the `Reservation` table. All the data in the column will be lost.
  - The `TIme` column on the `Reservation` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "startAt",
DROP COLUMN "TIme",
ADD COLUMN     "TIme" TIMESTAMP(3);
