-- Drop database if exists
DROP DATABASE IF EXISTS db_bookshop WITH (force);

-- Create database
CREATE DATABASE db_bookshop OWNER vboxuser TEMPLATE template0;

-- Connect to the database
\c db_bookshop;

-- Create schema
CREATE SCHEMA s_bookshop;

-- Create table t_books
CREATE TABLE s_bookshop.t_books (
    pk_book_id BIGSERIAL PRIMARY KEY,
    title VARCHAR(1000) NOT NULL,
    price_in_pence BIGINT NOT NULL,
    quantity_in_stock BIGINT NOT NULL,
    release_date DATE NULL,
    is_fiction BOOLEAN NOT NULL
);

-- Insert data into t_books
INSERT INTO s_bookshop.t_books (title, price_in_pence, quantity_in_stock, release_date, is_fiction)
VALUES
    ('The Hitchhiker''s Guide to the Galaxy', 899, 560, '1997-10-12', true),
    ('The Little Prince', 699, 1020, '1943-04-06', true),
    ('The Tale of Peter Rabbit', 599, 1000, '1902-10-01', true),
    ('Emma', 522, 390, '1815-12-23', true),
    ('Nineteen Eighty-Four: A Novel', 799, 420, '1049-06-08', true),
    ('The Handmaids''s Tale', 899, 10, '1985-08-01', true),
    ('The War of the Worlds', 250, 17, '1897-04-01', true),
    ('Captain Corelli''s Mandolin', 999, 0, '1995-08-29', true),
    ('A Brief History of Time', 825, 0, '1988-04-01', false),
    ('Pride and Prejudice', 699, 4, '1813-01-28', true);

-- Queries
SELECT * FROM s_bookshop.t_books WHERE quantity_in_stock > 0;
SELECT * FROM s_bookshop.t_books WHERE is_fiction IS TRUE;
SELECT * FROM s_bookshop.t_books WHERE release_date >= '1900-01-01' AND release_date < '2000-01-01';
SELECT * FROM s_bookshop.t_books WHERE lower(title) LIKE '%the%';
SELECT * FROM s_bookshop.t_books ORDER BY title ASC;
SELECT * FROM s_bookshop.t_books WHERE price_in_pence = (SELECT MAX(price_in_pence) FROM s_bookshop.t_books);

-- Section 2

-- Create table t_authors
CREATE TABLE s_bookshop.t_authors (
    pk_author_id BIGSERIAL PRIMARY KEY,
    author_name VARCHAR(1000) NOT NULL,
    trivia VARCHAR(5000)
);

-- Insert data into t_authors
INSERT INTO s_bookshop.t_authors (author_name, trivia) VALUES
 ('Dan Brown', 'Favourite colour is not brown.'),
('Antoine de Saint-Exupéry', 'He was a successful commercial pilot before World War II, working airmail routes in Europe, Africa, and South America.'),
('Douglas Adams', 'He made two appearances in Monty Python''s Flying Circus.'),
('Stephen Hawking', 'Doctors told him he wouldn''t live past his early 20s.'),
('Eric Carle', 'When he was a young boy, Carle had a dream that he would build a bridge from Germany to America.'),
('J. D. Salinger', 'The Catcher in the Rye was the only novel that J.D. Salinger published during his lifetime - not bad for a first try!'),
('Beatrix Potter', 'Between 1881 and 1897 Potter kept a journal in which she jotted down her private thoughts in a secret code. This code was so fiendishly difficult it was not cracked and translated until 1958.'),
('C. S. Lewis', 'Lewis set up a charitable trust to give away whatever money he received from his books.'),
('Roald Dahl', 'During World War II he passed intelligence to MI6 from Washington.'),
('Frank Herbert', 'While conversing with fungi expert Paul Stamets, Herbert revealed that the world of Dune was influenced by the lifecycle of mushrooms, with his imagination being helped along by a more "magic" variety.'),
('Louis de Bernières', 'De Bernières is an avid musician who plays flute, mandolin, clarinet, and guitar.'),
('H. G. Wells', 'In 1914 H.G. Wells published a novel titled The World Set Free. In this book, he described a weapon that was eerily similar to the first atomic bomb unleashed on the Japanese cities of Hiroshima and Nagasaki in 1945.'),
('George Orwell', 'Orwell intentionally got himself arrested for being "drunk and incapable".'),
('Jane Austen', 'The author of her first novel, Sense and Sensibility, was simply "A Lady", and her later works like Pride and Prejudice were credited to "the Author of Sense and Sensibility". She wasn''t named as the author of her novels until after her death!'),
('Margaret Atwood', 'Atwood was the first author to contribute to The Future Library Project, which will take one writer''s contribution each year for one hundred years to be printed in the year 2114.');


-- Alter table t_books to add foreign key to t_authors
ALTER TABLE s_bookshop.t_books ADD COLUMN fk_author_id BIGINT REFERENCES s_bookshop.t_authors(pk_author_id) ON DELETE CASCADE;

-- Update fk_author_id in t_books based on author_name
UPDATE s_bookshop.t_books AS books
SET fk_author_id = authors.pk_author_id
FROM s_bookshop.t_authors AS authors
WHERE books.fk_author_id IS NULL
  AND authors.author_name IN (
    'Dan Brown',
    'Antoine de Saint-Exupéry',
    'Douglas Adams',
    'Stephen Hawking',
    'Eric Carle',
    'J. D. Salinger',
    'Beatrix Potter',
    'C. S. Lewis',
    'Roald Dahl',
    'Frank Herbert',
    'Louis de Bernières',
    'H. G. Wells',
    'George Orwell',
    'Jane Austen',
    'Margaret Atwood'
  )
  AND authors.author_name = (
    CASE
      WHEN books.title = 'The Hitchhiker''s Guide to the Galaxy' THEN 'Douglas Adams'
      WHEN books.title = 'The Little Prince' THEN 'Antoine de Saint-Exupéry'
      WHEN books.title = 'The Tale of Peter Rabbit' THEN 'Beatrix Potter'
      WHEN books.title = 'Nineteen Eighty-Four: A Novel' THEN 'George Orwell'
      WHEN books.title = 'The Handmaids''s Tale' THEN 'Margaret Atwood'
      WHEN books.title = 'The War of the Worlds' THEN 'H. G. Wells'
      WHEN books.title = 'Captain Corelli''s Madolin' THEN 'Louis de Bernières'
      WHEN books.title = 'Pride and Prejudice' THEN 'Jane Austen'
      WHEN books.title = 'A Brief History of Time' THEN 'Stephen Hawking'
      ELSE NULL
    END
  );

-- Select authors and their books
SELECT authors.pk_author_id, authors.author_name, books.pk_book_id, books.title
FROM s_bookshop.t_authors AS authors
JOIN s_bookshop.t_books AS books ON books.fk_author_id = authors.pk_author_id;

-- Create table t_genres
CREATE TABLE s_bookshop.t_genres (
    pk_genre_id BIGSERIAL PRIMARY KEY,
    genre VARCHAR(50) NOT NULL
);

-- Insert data into t_genres
INSERT INTO s_bookshop.t_genres (genre)
VALUES 
    ('science fiction'),
    ('children''s'),
    ('romance'),
    ('fantasy'),
    ('dystopian'),
    ('science'),
    ('adventure'),
    ('classics');

-- Create table t_genres_books to establish a many-to-many relationship between genres and books
CREATE TABLE s_bookshop.t_genres_books (
    PRIMARY KEY(fk_genre_id, fk_book_id),
    fk_genre_id BIGINT REFERENCES s_bookshop.t_genres(pk_genre_id),
    fk_book_id BIGINT REFERENCES s_bookshop.t_books(pk_book_id) ON DELETE CASCADE
);

-- Insert data into t_genres_books
INSERT INTO s_bookshop.t_genres_books (fk_genre_id, fk_book_id) VALUES
    (1, 1), (2, 2), (3, 3), (4, 5), (3, 5), (1, 2); -- (other genre-book mappings...)

-- Retrieve all genres of a specific book
SELECT books.title, ARRAY_AGG(genres.genre)
FROM s_bookshop.t_books AS books
JOIN s_bookshop.t_genres_books AS genres_books ON genres_books.fk_book_id = books.pk_book_id
JOIN s_bookshop.t_genres AS genres ON genres.pk_genre_id = genres_books.fk_genre_id
WHERE books.pk_book_id = 5
GROUP BY books.title;

-- Retrieve all books of a specific genre
SELECT genres.genre, ARRAY_AGG(books.title)
FROM s_bookshop.t_books AS books
JOIN s_bookshop.t_genres_books AS genres_books ON genres_books.fk_book_id = books.pk_book_id
JOIN s_bookshop.t_genres AS genres ON genres.pk_genre_id = genres_books.fk_genre_id
WHERE genres.pk_genre_id = 1
GROUP BY genres.genre;

-- List the total number of books we have by each author
INSERT INTO s_bookshop.t_books (title, price_in_pence, quantity_in_stock, release_date, is_fiction, fk_author_id)
VALUES ('Animal Farm', 101, 1984, '1950-01-01', false, 13);

SELECT authors.author_name, ARRAY_AGG(books.title), COUNT(books.title)
FROM s_bookshop.t_authors AS authors
JOIN s_bookshop.t_books AS books ON books.fk_author_id = authors.pk_author_id
GROUP BY authors.author_name;

-- List the average price for books of a specific genre
SELECT genres.genre, ROUND(AVG(books.price_in_pence), 0)
FROM s_bookshop.t_books AS books
JOIN s_bookshop.t_genres_books AS genres_books ON genres_books.fk_book_id = books.pk_book_id
JOIN s_bookshop.t_genres AS genres ON genres.pk_genre_id = genres_books.fk_genre_id
WHERE genres.pk_genre_id = 1
GROUP BY genres.genre;

/*1: Use the ARRAY_AGG() function to get a list of each book in a single row, with all genres that the book belongs to.*/

SELECT genres.genre, ARRAY_AGG(books.title)
FROM s_bookshop.t_books AS books
JOIN s_bookshop.t_genres_books AS genres_books ON genres_books.fk_book_id = books.pk_book_id
JOIN s_bookshop.t_genres AS genres ON genres.pk_genre_id = genres_books.fk_genre_id
WHERE genres.pk_genre_id = 1
GROUP BY genres.genre;

-- Section 3

-- Create table t_users
CREATE TABLE s_bookshop.t_users (
    pk_user_id BIGSERIAL PRIMARY KEY,
    firstname VARCHAR(50),
    lastname VARCHAR(50)
);

-- Create table t_reviews
CREATE TABLE s_bookshop.t_reviews (
    pk_review_id BIGSERIAL PRIMARY KEY,
    fk_book_id BIGINT REFERENCES s_bookshop.t_books(pk_book_id),
    rating SMALLINT NOT NULL,
    fk_user_id BIGINT REFERENCES s_bookshop.t_users(pk_user_id) ON DELETE CASCADE
);

-- Add constraint on rating
ALTER TABLE s_bookshop.t_reviews ADD CONSTRAINT cs_rating CHECK (rating IN (1, 2, 3, 4, 5));

-- Insert data into t_users
INSERT INTO s_bookshop.t_users (firstname, lastname)
VALUES
('Maverick', 'Steele'), ('Scarlett', 'Blaze'), ('Jax', 'Fury'), ('Electra', 'Vixen'),
('Ace', 'Thunder'), ('Ruby', 'Rebel'), ('Diesel', 'Storm'), ('Venus', 'Fierce'),
('Axel', 'Wilder'), ('Harley', 'Rogue'), ('Blaze', 'Tempest'), ('Luna', 'Serpent'),
('Zane', 'Dash'), ('Phoenix', 'Siren'), ('Rogue', 'Ryder'), ('Roxie', 'Venom'),
('Rocco', 'Havoc'), ('Starla', 'Swift'), ('Knox', 'Chaos'), ('Delilah', 'Haze'),
('Gunner', 'Rogue'), ('Vixen', 'Dagger'), ('Blade', 'Wildfire'), ('Zara', 'Riot'),
('Colt', 'Phoenix'), ('Cleo', 'Savage'), ('Rex', 'Stormborn'), ('Jazz', 'Daring'),
('Astrid', 'Flame'), ('Zephyr', 'Thorn'), ('Rogue', 'Tempest'), ('Calypso', 'Sable'),
('Knox', 'Fury'), ('Stormie', 'Vandal'), ('Dagger', 'Steele'), ('Electra', 'Nox'),
('Diesel', 'Havoc'), ('Ruby', 'Inferno'), ('Phoenix', 'Reign'), ('Ace', 'Nightshade'),
('Luna', 'Venom'), ('Blaze', 'Viper'), ('Axel', 'Danger'), ('Roxie', 'Havoc'),
('Zane', 'Cinders'), ('Maverick', 'Rebel'), ('Scarlett', 'Shadow'), ('Jax', 'Reign'),
('Venus', 'Viper'), ('Zara', 'Foxfire');

-- Insert data into t_reviews
INSERT INTO s_bookshop.t_reviews (fk_book_id, rating, fk_user_id)
VALUES
(1, 5, 17), (7, 4, 39), (3, 3, 8), (4, 2, 22), (2, 5, 45),
(5, 4, 11), (6, 3, 30), (2, 2, 3), (3, 5, 48), (1, 4, 36),
(4, 3, 9), (7, 2, 14), (1, 5, 50), (5, 4, 27), (6, 3, 5),
(7, 2, 41), (3, 5, 16), (4, 4, 25), (2, 3, 34), (6, 2, 2),
(1, 5, 33), (5, 4, 38), (3, 3, 12), (2, 2, 1), (7, 5, 13),
(4, 4, 47), (6, 3, 7), (1, 2, 37), (5, 5, 49), (3, 4, 32),
(2, 3, 26), (7, 2, 20), (1, 5, 24), (4, 4, 10), (6, 3, 19),
(3, 2, 4), (2, 5, 28), (5, 4, 40), (7, 3, 21), (4, 2, 6),
(1, 5, 31), (6, 4, 15), (7, 3, 46), (2, 2, 18), (5, 5, 23),
(4, 4, 42), (3, 3, 35), (6, 2, 29), (1, 5, 43), (7, 4, 44);


-- Get all reviews of a specified book
SELECT books.title, reviews.pk_review_id, reviews.rating, CONCAT(users.firstname, ' ', users.lastname) AS "full name"
FROM s_bookshop.t_books AS books
JOIN s_bookshop.t_reviews AS reviews ON books.pk_book_id = reviews.fk_book_id
JOIN s_bookshop.t_users AS users ON reviews.fk_user_id = users.pk_user_id
WHERE books.pk_book_id = 1;

-- Get the average rating of a book
SELECT books.title, AVG(reviews.rating)
FROM s_bookshop.t_books AS books
JOIN s_bookshop.t_reviews AS reviews ON books.pk_book_id = reviews.fk_book_id
GROUP BY books.title;

-- Get best and worst reviews
SELECT books.title, ARRAY_AGG(reviews.rating)
FROM s_bookshop.t_books AS books
JOIN s_bookshop.t_reviews AS reviews ON books.pk_book_id = reviews.fk_book_id
WHERE reviews.rating >= 4 OR reviews.rating <= 2
GROUP BY books.title;

-- Get best reviewed books
SELECT books.title, AVG(reviews.rating)
FROM s_bookshop.t_books AS books
JOIN s_bookshop.t_reviews AS reviews ON books.pk_book_id = reviews.fk_book_id
GROUP BY books.title HAVING AVG(reviews.rating) >= 4;

-- List all reviews by a single user
SELECT users.pk_user_id, ARRAY_AGG(reviews.rating)
FROM s_bookshop.t_users AS users
JOIN s_bookshop.t_reviews AS reviews ON users.pk_user_id = reviews.fk_user_id
WHERE users.pk_user_id = 5
GROUP BY users.pk_user_id;

-- Find out the average rating that a user has given in all of their reviews
SELECT users.pk_user_id, ROUND(AVG(reviews.rating), 2)
FROM s_bookshop.t_users AS users
JOIN s_bookshop.t_reviews AS reviews ON users.pk_user_id = reviews.fk_user_id
WHERE users.pk_user_id = 5
GROUP BY users.pk_user_id;

-- List books that a user has not reviewed
SELECT *
FROM s_bookshop.t_books AS books
WHERE books.pk_book_id NOT IN (
    SELECT reviews.fk_book_id
    FROM s_bookshop.t_users AS users
    JOIN s_bookshop.t_reviews AS reviews ON users.pk_user_id = reviews.fk_user_id
    WHERE users.pk_user_id = 5
);

-- Get unique prices of books
SELECT DISTINCT(price_in_pence) FROM s_bookshop.t_books;

