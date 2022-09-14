-- Active: 1661428809584@@35.226.146.116@3306@freire-jonatas-cunha
CREATE TABLE cookenu_user (  
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    role ENUM("user", "admin") DEFAULT "user",
    password VARCHAR(255) NOT NULL
);