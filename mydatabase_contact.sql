create database mywebsite;
use mywebsite;

create table contact(name varchar(50) not null,
email varchar(50) primary key unique,
message varchar(500) not null);

select * from contact