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
-- insert into products (name, images, details, specifications, product_category) values ('computer', 'an image', 'some details', 'the specs', 'electronics');

-- insert into products (name, images, details, specifications, product_category) values ('computer2', 'an image', 'some details', 'the specs', 'electronics');

-- insert into products (name, images, details, specifications, product_category) values ('Dynasty Warriors 1', 'an image 1', 'some details', 'the specs', 'games');

-- insert into products (name, images, details, specifications, product_category) values ('Dynasty Warriors 2', 'an image 2', 'some details', 'the specs', 'games');

-- insert into products (name, images, details, specifications, product_category) values ('Dynasty Warriors 3', 'an image 3', 'some details', 'the specs', 'games');