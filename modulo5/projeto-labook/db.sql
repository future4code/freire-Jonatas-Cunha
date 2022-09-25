CREATE TABLE labook_users (  
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
);

CREATE TABLE labook_posts (  
    id VARCHAR(255) PRIMARY KEY,
    content VARCHAR(255) NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES labook_users(id)
);

CREATE TABLE labook_likes (  
    id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    post_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES labook_users(id),
    FOREIGN KEY (post_id) REFERENCES labook_posts(id)
);