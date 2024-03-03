/*
  Warnings:

  - You are about to drop the column `age` on the `User` table. All the data in the column will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `User_name_age_key` ON `User`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `age`,
    ADD COLUMN `password` VARCHAR(191) NOT NULL;
