/*
  Warnings:

  - You are about to drop the column `sportId` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the `Sport` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `isGym` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_sportId_fkey";

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "sportId",
ADD COLUMN     "gender" TEXT,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "isGym" BOOLEAN NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sport" TEXT;

-- DropTable
DROP TABLE "Sport";
