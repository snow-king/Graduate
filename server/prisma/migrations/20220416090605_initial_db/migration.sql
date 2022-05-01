-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAT" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAT" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cities" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,

    CONSTRAINT "Cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Companies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "cityId" INTEGER NOT NULL,
    "webAdress" TEXT NOT NULL,

    CONSTRAINT "Companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "graduetes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "patronymic" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "graduetes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rewiews" (
    "id" SERIAL NOT NULL,
    "graduateId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "Rewiews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workes" (
    "id" SERIAL NOT NULL,
    "graduateId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,
    "statusWork" BOOLEAN NOT NULL,

    CONSTRAINT "Workes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Cities_Name_key" ON "Cities"("Name");

-- CreateIndex
CREATE UNIQUE INDEX "Companies_name_key" ON "Companies"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Companies_phone_key" ON "Companies"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Companies_webAdress_key" ON "Companies"("webAdress");

-- CreateIndex
CREATE UNIQUE INDEX "graduetes_email_key" ON "graduetes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "graduetes_phone_key" ON "graduetes"("phone");

-- AddForeignKey
ALTER TABLE "Companies" ADD CONSTRAINT "Companies_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "Cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rewiews" ADD CONSTRAINT "Rewiews_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rewiews" ADD CONSTRAINT "Rewiews_graduateId_fkey" FOREIGN KEY ("graduateId") REFERENCES "graduetes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workes" ADD CONSTRAINT "Workes_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workes" ADD CONSTRAINT "Workes_graduateId_fkey" FOREIGN KEY ("graduateId") REFERENCES "graduetes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
