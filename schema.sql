USE restaurant;

CREATE TABLE Category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)  NOT NULL,
    note VARCHAR(255) 
);


CREATE TABLE Product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)  NOT NULL,
    image VARCHAR(255) NOT NULL,
    quantity int NOT NULL,
    const DECIMAL(12, 0) NOT NULL,
    price DECIMAL(12, 0) NOT NULL,
    categoryId INT,
    FOREIGN KEY (categoryId) REFERENCES Category(id)
);


CREATE TABLE User (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)  NOT NULL,
    username VARCHAR(50)  NOT NULL UNIQUE,
    password VARCHAR(100)  NOT NULL,
    role ENUM('ADMIN', 'EMPLOYEE', 'CASHIER') NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(10) NOT NULL UNIQUE,
    isLock BOOLEAN,
);
