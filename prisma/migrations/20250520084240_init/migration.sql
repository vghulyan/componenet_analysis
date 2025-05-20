-- CreateTable
CREATE TABLE "ComponentUsage" (
    "id" SERIAL NOT NULL,
    "component" TEXT NOT NULL,
    "file" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ComponentUsage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropUsage" (
    "id" SERIAL NOT NULL,
    "component" TEXT NOT NULL,
    "file" TEXT NOT NULL,
    "prop" TEXT NOT NULL,
    "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PropUsage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnusedComponent" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UnusedComponent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UnusedComponent_name_key" ON "UnusedComponent"("name");
