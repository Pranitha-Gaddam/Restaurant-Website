CREATE TABLE if not exists reservation (
    id SERIAL PRIMARY KEY,
    resName VARCHAR(250),
    phone VARCHAR(50),
    resDate DATE,
    resTime TIME,
    guests INT
    );