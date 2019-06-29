create database expenses;

use expenses;

create table categories(
  id serial,
  name varchar(255)
);

create table expense(
  id serial,
  cat_id int,
  expense varchar(255),
  cost Dec(10, 2)
);