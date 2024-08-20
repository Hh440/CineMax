/*
  Warnings:

  - You are about to drop the `Booking` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Screening` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_screeningId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_userId_fkey";

-- DropForeignKey
ALTER TABLE "Screening" DROP CONSTRAINT "Screening_movieId_fkey";

-- DropForeignKey
ALTER TABLE "Screening" DROP CONSTRAINT "Screening_theaterId_fkey";

-- DropTable
DROP TABLE "Booking";

-- DropTable
DROP TABLE "Screening";
