/*
  Warnings:

  - You are about to drop the column `recordedAt` on the `ComponentUsage` table. All the data in the column will be lost.
  - You are about to drop the column `recordedAt` on the `PropUsage` table. All the data in the column will be lost.
  - You are about to drop the column `recordedAt` on the `UnusedComponent` table. All the data in the column will be lost.
  - Added the required column `projectId` to the `ComponentUsage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `PropUsage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `UnusedComponent` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "UnusedComponent_name_key";

-- AlterTable
ALTER TABLE "ComponentUsage" DROP COLUMN "recordedAt",
ADD COLUMN     "projectId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PropUsage" DROP COLUMN "recordedAt",
ADD COLUMN     "projectId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "UnusedComponent" DROP COLUMN "recordedAt",
ADD COLUMN     "projectId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "repoUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ComponentUsage" ADD CONSTRAINT "ComponentUsage_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropUsage" ADD CONSTRAINT "PropUsage_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnusedComponent" ADD CONSTRAINT "UnusedComponent_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
