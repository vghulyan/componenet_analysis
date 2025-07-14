/*
  Warnings:

  - Added the required column `projectId` to the `ClassRule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ClassRule" ADD COLUMN     "projectId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ClassRule" ADD CONSTRAINT "ClassRule_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
