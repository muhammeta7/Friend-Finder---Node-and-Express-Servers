CREATE DATABASE friendsDB;

USE friendsDB;

CREATE TABLE friendsList(
  id int AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  imageURL varchar(max) NOT NULL
  q1 int NOT NULL,
  q2 int NOT NULL,
  q3 int NOT NULL,
  q4 int NOT NULL,
  q5 int NOT NULL,
  q6 int NOT NULL,
  q7 int NOT NULL,
  q9 int NOT NULL,
  q9 int NOT NULL,
  q10 int NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO friendsList(name, imageURL, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10)
VALUES ('Jack', 'http://lorempixel.com/400/200/', 4, 5, 5, 2, 1, 3, 5, 3, 4, 4),
       ('Ann', 'http://lorempixel.com/400/200/', 2, 3, 4, 4, 4, 5, 3, 5, 5, 2);
