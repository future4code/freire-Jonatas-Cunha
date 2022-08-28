
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

CREATE TABLE tdTaskUsers (
    task_id VARCHAR(255) NOT NULL,
    responsible_user_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (task_id) REFERENCES tdTasks(id),
    FOREIGN KEY (responsible_user_id) REFERENCES tdUsers(id)
);
