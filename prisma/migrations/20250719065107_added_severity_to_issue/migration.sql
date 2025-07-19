-- CreateEnum
CREATE TYPE "Severity" AS ENUM ('MINOR', 'NORMAL', 'MAJOR', 'CRITICAL', 'SHOW_STOPPER');

-- AlterTable
ALTER TABLE "Issue" ADD COLUMN     "severity" "Severity" NOT NULL DEFAULT 'NORMAL';
