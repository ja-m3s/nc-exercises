DROP DATABASE IF EXISTS database_book_shop;
CREATE DATABASE database_book_shop OWNER vboxuser TEMPLATE template0;
\c database_book_shop;
CREATE SCHEMA schema_book_shop;

CREATE TABLE schema_book_shop.books (
	book_id BIGSERIAL PRIMARY KEY,
	title VARCHAR ( 1000 ) NOT NULL,
	price_in_pence BIGINT NOT NULL,
	quantity_in_stock BIGINT NOT NULL,
	release_date DATE NULL,
  is_fiction BOOLEAN
);

insert into schema_book_shop.books(
  title,
  price_in_pence,
  uantity_in_stock,
  release_date,
  is_fiction
)
values
('The Hitchhiker''s Guide to the Galaxy', 899, 560,'1997-10-12',true),
('The Little Prince',699,1020,'1943-04-06',true),
('The Tale of Peter Rabbit',599,1000,'1902-10-01',true),
('Emma',522,390,'1815-12-23',true),
('Nineteen Eighty-Four: A Novel',799,420,'1049-06-08',true),
('The Handmaids''s Tale',899,10,'1985-08-01',true),
('The War of the Worlds',250,17,'1897-04-01',true),
('Captain Corelli''s Madolin',999,0,'1995-08-29',true),
('A Brief History of Time',825,0,'1988-04-01',false),
('Pride and Prejudice',699,4,'1813-01-28',true);

select * from schema_book_shop.books where quantity_in_stock > 0;
select * from schema_book_shop.books where is_fiction is true;
select * from schema_book_shop.books where release_date >= '1900-01-01' and release_date < '2000-01-01';
select * from schema_book_shop.books where lower(title) like '%the%';
select * from schema_book_shop.books order by title asc;

select * from schema_book_shop.books
where price_in_pence = (
   select MAX (price_in_pence)
   from schema_book_shop.books
);

delete from schema_book_shop.books where title = 'Emma';

update schema_book_shop.books set price_in_pence = 200 where book_id=9;

