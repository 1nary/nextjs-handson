-- CreateTable
CREATE TABLE `favorite_shops` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `gourme_identifier` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `favorite_shops_gourme_identifier_key`(`gourme_identifier`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
