create database spark;
use spark;

CREATE TABLE `user` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100),
    `address` VARCHAR(1000),
    `contact` VARCHAR(12),
    `gender` VARCHAR(6),
    `country` VARCHAR(100),
    `password` VARCHAR(100),
    PRIMARY KEY (`id`), 
    UNIQUE(`email`)
);