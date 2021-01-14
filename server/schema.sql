drop database if exists products_db;
create database products_db;
use products_db;

create table products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  images TEXT NOT NULL,
  details TEXT NOT NULL,
  specifications TEXT NOT NULL,
  product_category VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

-- insert electronics
insert into products (name, images, details, specifications, product_category) values ('computer', 'an image', 'some details', 'the specs', 'electronics');