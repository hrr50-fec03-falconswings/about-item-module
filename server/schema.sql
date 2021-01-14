drop database if exists products_db;
create database products_db;
use products_db;

create table product_categories (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL UNIQUE,
  PRIMARY KEY (id)
);

create table products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  images TEXT NOT NULL,
  details TEXT NOT NULL,
  specifications TEXT NOT NULL,
  product_category INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (product_category) REFERENCES product_categories(id)
);

