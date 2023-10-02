-- Create the table 'items'
CREATE TABLE items (
    uid SERIAL PRIMARY KEY,
    title VARCHAR(50)
);

-- Insert 2 rows of random to-do list items
INSERT INTO items (title) VALUES ('Complete project report');
INSERT INTO items (title) VALUES ('Buy groceries');
