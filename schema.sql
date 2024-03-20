USE restaurant;

CREATE TABLE Category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)  NOT NULL,
    note VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE Product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)  NOT NULL,
    image VARCHAR(255) NOT NULL,
    description VARCHAR(255) NULL,
    quantity int NOT NULL,
    cost DECIMAL(12, 0) NOT NULL,
    price DECIMAL(12, 0) NOT NULL,
    categoryId INT,
    FOREIGN KEY (categoryId) REFERENCES Category(id),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE User (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)  NOT NULL,
    username VARCHAR(50)  NOT NULL UNIQUE,
    password VARCHAR(100)  NOT NULL,
    role ENUM('ADMIN', 'EMPLOYEE', 'CASHIER') NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(10) NOT NULL UNIQUE,
    isLock TINYINT(1) DEFAULT 0,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    province VARCHAR(100)  NOT NULL,
);

CREATE TABLE Area (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)  NOT NULL,
    note VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE TableEat (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)  NOT NULL,
    note VARCHAR(255),
    seat INT NOT NULL,
    areaId INT NOT NULL,
    status ENUM('IDLE', 'ACTIVE', 'ORDERED') NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (areaId) REFERENCES Area(id),
)

CREATE TABLE Order (
    name VARCHAR(50) NOT NULL,
    totalPrice DECIMAL(18, 0) NOT NULL,
    status ENUM('UNPAID', 'PAID','CANCEL') NOT NULL,
    customerInfo VARCHAR(255)  NULL,
    billCashier INT,
    note VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (billCashier) REFERENCES User(id),
)


 CREATE TABLE OrderTableDetail (
    id INT AUTO_INCREMENT PRIMARY KEY,
    orderId INT,
    tableId INT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (orderId) REFERENCES Order(id),
    FOREIGN KEY (tableId) REFERENCES TableEat(id),
 )

 CREATE TABLE OrderProductDetail (
    id INT AUTO_INCREMENT PRIMARY KEY,
    orderId INT,
    productId INT,
    quantity INT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (orderId) REFERENCES Order(id),
    FOREIGN KEY (productId) REFERENCES Product(id),
 )
