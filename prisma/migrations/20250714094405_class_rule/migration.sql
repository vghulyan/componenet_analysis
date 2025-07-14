-- CreateTable
CREATE TABLE "ClassRule" (
    "id" SERIAL NOT NULL,
    "pattern" TEXT NOT NULL,
    "package" TEXT NOT NULL,
    "component" TEXT,

    CONSTRAINT "ClassRule_pkey" PRIMARY KEY ("id")
);
