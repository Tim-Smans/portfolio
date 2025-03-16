-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "projectUrl" VARCHAR(1000);

-- AlterTable
ALTER TABLE "Tag" ADD COLUMN     "iconName" VARCHAR(30) DEFAULT '';
