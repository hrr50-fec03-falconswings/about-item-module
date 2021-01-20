drop database if exists products_db;
create database products_db;
use products_db;

create table products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  images MEDIUMTEXT NOT NULL,
  -- price INT NOT NULL,
  -- reviews_avg INT NOT NULL,
  -- reviews_total INT NOT NULL,
  details TEXT NOT NULL,
  specifications TEXT NOT NULL,
  product_category VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);