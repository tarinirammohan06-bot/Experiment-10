Experiment 10: Express REST API CRUD Operations

Description

This project demonstrates how to develop a RESTful API using Node.js, Express.js, and SQLite. It performs CRUD (Create, Read, Update, and Delete) operations on student records stored in an SQLite database.

Technologies Used

* Node.js
* Express.js
* SQLite3
* JavaScript
* REST API

Features

* Create: Add new student records.
* Read: Retrieve all students or a specific student by ID.
* Update: Modify existing student details.
* Delete: Remove student records.
* Database Management: Automatically creates the students table if it does not exist.
* Error Handling: Returns appropriate error responses for database operations.

API Endpoints

Method	Endpoint	Description
GET	/	Display a welcome message
GET	/students	Retrieve all students
GET	/students/:id	Retrieve a student by ID
POST	/students	Add a new student
PUT	/students/:id	Update student details
DELETE	/students/:id	Delete a student by ID

Installation and Execution

1. Install Node.js.
2. Open the project folder in the terminal.
3. Install the required dependencies:

npm install

4. Start the server:

npm start

5. Open the following address in your browser or API testing tool:

http://localhost:3000

Database Structure

The students table contains the following fields:

* id – Unique student ID (Primary Key).
* name – Student’s name.
* age – Student’s age.
* grade – Student’s grade.

Testing

Use Postman or another API testing tool to send HTTP requests to the endpoints and verify the CRUD operations.

Learning Outcome

This experiment helps understand REST API development, HTTP methods, Express.js routing, middleware, SQLite database connectivity, and CRUD operations using Node.js.Experiment 10: Express REST API CRUD Operations

Description

This project demonstrates how to develop a RESTful API using Node.js, Express.js, and SQLite. It performs CRUD (Create, Read, Update, and Delete) operations on student records stored in an SQLite database.

Technologies Used

* Node.js
* Express.js
* SQLite3
* JavaScript
* REST API

Features

* Create: Add new student records.
* Read: Retrieve all students or a specific student by ID.
* Update: Modify existing student details.
* Delete: Remove student records.
* Database Management: Automatically creates the students table if it does not exist.
* Error Handling: Returns appropriate error responses for database operations.

API Endpoints

Method	Endpoint	Description
GET	/	Display a welcome message
GET	/students	Retrieve all students
GET	/students/:id	Retrieve a student by ID
POST	/students	Add a new student
PUT	/students/:id	Update student details
DELETE	/students/:id	Delete a student by ID

Installation and Execution

1. Install Node.js.
2. Open the project folder in the terminal.
3. Install the required dependencies:

npm install

4. Start the server:

npm start

5. Open the following address in your browser or API testing tool:

http://localhost:3000

Database Structure

The students table contains the following fields:

* id – Unique student ID (Primary Key).
* name – Student’s name.
* age – Student’s age.
* grade – Student’s grade.

Testing

Use Postman or another API testing tool to send HTTP requests to the endpoints and verify the CRUD operations.

Learning Outcome

This experiment helps understand REST API development, HTTP methods, Express.js routing, middleware, SQLite database connectivity, and CRUD operations using Node.js.
