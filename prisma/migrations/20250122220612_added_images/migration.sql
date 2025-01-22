/*
  Warnings:

  - You are about to drop the column `description` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Project` table. All the data in the column will be lost.
  - Added the required column `shortDescription` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "description",
DROP COLUMN "imageUrl",
ADD COLUMN     "coverImageUrl" VARCHAR(255) DEFAULT 'https://via.assets.so/img.jpg?w=200&h=200&tc=black&bg=#cecece',
ADD COLUMN     "shortDescription" VARCHAR(255) NOT NULL;

-- CreateTable
CREATE TABLE "Image" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "url" VARCHAR(300) NOT NULL,
    "alt" VARCHAR(300) NOT NULL,
    "projectId" UUID NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
