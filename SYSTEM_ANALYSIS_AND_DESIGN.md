# CSC 317 — System Analysis and Design Notes

## Project title
Student Record Management System

## 1. Introduction
A Student Record Management System is a software solution for organizing basic student information. This project demonstrates how a problem can be studied, requirements identified, and a small software solution designed.

## 2. Problem definition
Manual student record keeping can be slow and can make searching for a particular student's details difficult. A small digital system can make basic records easier to add, view, search, and remove.

## 3. Objectives
- Organize student details.
- Provide a simple form for adding records.
- Make records searchable.
- Prevent duplicate matric numbers.
- Demonstrate the stages of system analysis and design.

## 4. Feasibility study
- **Technical feasibility:** The prototype uses HTML, CSS, and JavaScript, which can run in a modern browser.
- **Economic feasibility:** The prototype uses free development tools and does not require paid hosting to test locally.
- **Operational feasibility:** The form and table are designed to be straightforward for a basic user.

## 5. Requirements
### Functional
Add a record, list records, search by name or matric number, reject duplicate matric numbers, and delete records.

### Non-functional
The interface should be readable, responsive, and easy to use. This educational prototype must not be used to store confidential records.

## 6. Design
The interface has two main areas: an Add a Student form and a Student Records table. JavaScript validates entries and updates the display. Browser local storage preserves records in the same browser.

## 7. Development approach
1. Identify the record-keeping problem.
2. Define project scope and requirements.
3. Design the input form and records table.
4. Implement the page using HTML, CSS, and JavaScript.
5. Test adding, duplicate prevention, searching, deletion, and persistence.
6. Publish the source code in a GitHub repository.

## 8. Limitations and future improvements
This is a front-end prototype, not a production school database. Future improvements could include login roles, editing records, server-side storage, database backups, and stronger privacy controls.

## 9. Conclusion
The project provides a practical example of requirements analysis, interface design, implementation, and testing for a simple information system.
