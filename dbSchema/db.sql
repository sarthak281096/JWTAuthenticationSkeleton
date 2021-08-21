create database spark;
use spark;

CREATE TABLE `user` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100),
    `email` VARCHAR(100),
    `password` VARCHAR(100),
    PRIMARY KEY (`id`), 
    UNIQUE(`email`)
);