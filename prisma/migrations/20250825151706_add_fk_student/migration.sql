-- CreateTable
CREATE TABLE `instructor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plate` VARCHAR(6) NOT NULL,
    `realse_date` DATE NOT NULL,
    `is_available` BOOLEAN NOT NULL DEFAULT true,
    `price` DECIMAL(10, 2) NOT NULL,
    `student_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `instructor` ADD CONSTRAINT `instructor_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `students`(`id_students`) ON DELETE RESTRICT ON UPDATE CASCADE;
