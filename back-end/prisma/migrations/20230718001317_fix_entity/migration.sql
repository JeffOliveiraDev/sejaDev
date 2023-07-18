/*
  Warnings:

  - You are about to drop the column `title` on the `Framework` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Library` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Tool` table. All the data in the column will be lost.
  - Added the required column `name` to the `Framework` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Library` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Tool` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Framework" DROP COLUMN "title",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Library" DROP COLUMN "title",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tool" DROP COLUMN "title",
ADD COLUMN     "name" TEXT NOT NULL;
