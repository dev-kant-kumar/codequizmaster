use codequizmaster;
create table users(
    _id int auto_increment primary key,
    name varchar(50) not null,
    username varchar(20) not null unique,
    email varchar(100) not null unique,
    gender enum('male', 'female', 'others') not null,
    password varchar(255) not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp
);
