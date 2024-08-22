/*
  Warnings:

  - You are about to drop the column `movieId` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `showtimeId` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `theatreId` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Reservation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_movieId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_showtimeId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_theatreId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_userId_fkey";

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "movieId",
DROP COLUMN "showtimeId",
DROP COLUMN "theatreId",
DROP COLUMN "userId";
