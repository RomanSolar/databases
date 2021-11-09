create database chat;

USE chat;

DROP TABLE IF EXISTS `Messages`;

CREATE TABLE `Messages` (
  `id` INTEGER AUTO_INCREMENT,
  `text` TEXT,
  `userid` INTEGER,
  `roomname` VARCHAR(20),
  primary key (`ID`),
  Foreign key 
);

CREATE TABLE `USERS` (
  `userid` INTEGER AUTO_INCREMENT,
  `username` VARCHAR(20),
  primary key (`userid`),
);