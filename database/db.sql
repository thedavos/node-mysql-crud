/* -- Creating database

CREATE DATABASE crudnodejsmysql;

-- Using database
USE crudnodejsmysql;

-- Creating a table
CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

-- SHOW ALL TABLES
SHOW TABLES;

-- TO DESCRIBE TABLES
DESCRIBE customer */