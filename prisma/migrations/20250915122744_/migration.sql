-- CreateTable
CREATE TABLE "students" (
    "id_students" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name_students" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "instructor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "plate" TEXT NOT NULL,
    "realse_date" DATETIME NOT NULL,
    "is_available" BOOLEAN NOT NULL DEFAULT true,
    "price" DECIMAL NOT NULL,
    "student_id" INTEGER NOT NULL,
    CONSTRAINT "instructor_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students" ("id_students") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "estado" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "estado" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "estado_id" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "usuario_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "estado" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_username_key" ON "usuario"("username");
