-- Active: 1661428809584@@35.226.146.116@3306@freire-jonatas-cunha

CREATE TABLE tdUsers (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    nickname VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE tdTasks (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    status ENUM("to_do", "doing", "done") NOT NULL DEFAULT "to_do",
    limit_date DATE NOT NULL,
    creator_user_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (creator_user_id) REFERENCES tdUsers(id)
);


SELECT * FROM `tdUsers`;