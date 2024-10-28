/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Reservation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "imageUrl",
ADD COLUMN     "image" TEXT,
ADD COLUMN     "slot" TEXT;
