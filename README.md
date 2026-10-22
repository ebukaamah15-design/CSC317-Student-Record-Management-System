# Student Record Management System

**Course:** CSC 317 — System Analysis and Design  
**Project type:** Beginner-friendly web application  
**Technologies:** HTML, CSS, JavaScript, browser local storage

## 1. Project overview
The Student Record Management System is a small web application designed to help a school keep basic student records in an organized format. A user can add a student, view saved records, search by name or matric number, and delete a record.

## 2. Problem statement
Keeping student information in notebooks or scattered files can make records difficult to search, update, and maintain. This project demonstrates a simple digital approach to organizing student records.

## 3. Aim and objectives
**Aim:** To design and implement a simple student record management system.

**Objectives:**
- Add a student record with a matric number, name, department, and level.
- Display saved student records in a table.
- Search for records by name or matric number.
- Delete a record when it is no longer needed.
- Reduce duplicate matric numbers.

## 4. Scope and limitations
The demo supports adding, listing, searching, and deleting student records in one browser. It uses local storage, so data stays in that browser on that device. It does not provide user accounts, a server database, cloud synchronization, or production-level security. Use sample data only.

## 5. System requirements
### Functional requirements
1. The system shall accept student details through a form.
2. The system shall reject a duplicate matric number.
3. The system shall save records in browser local storage.
4. The system shall display saved records.
5. The system shall filter records by name or matric number.
6. The system shall allow a user to delete a record.

### Non-functional requirements
- Usability: labels and controls should be easy to understand.
- Compatibility: the interface should adapt to mobile and desktop screens.
- Performance: ordinary small record lists should render quickly.
- Data caution: this demo is not intended for confidential or real student data.

## 6. System analysis
### Existing system
A manual or spreadsheet-based process may require a person to search through multiple entries and maintain records by hand.

### Proposed system
A browser-based interface stores sample student records and provides simple search and delete functions.

### Users
- School administrator or records officer
- Demonstration user/student

## 7. System design
### Input
Matric number, full name, department, and level.

### Processing
The application validates required fields, checks whether the matric number already exists, stores valid records, and filters records when the search field changes.

### Output
A table showing matching student records and a message describing the result of an action.

### Use-case summary
The user can:
- Add student
- View student list
- Search student
- Delete student

### Data structure
Each student record contains:
- `id`: matric number
- `name`: full name
- `department`: department
- `level`: academic level

## 8. Test plan
| Test | Action | Expected result |
|---|---|---|
| Add record | Submit complete student details | Record appears in the table |
| Required fields | Submit an incomplete form | Browser requests the missing field |
| Duplicate matric number | Add the same matric number twice | Duplicate is rejected |
| Search | Type part of a name or matric number | Only matching records appear |
| Delete | Tap Delete for a record | Record is removed |
| Persistence | Refresh the page after adding a record | Record remains in the same browser |

## 9. How to run
1. Download or clone this repository.
2. Open `index.html` in a modern web browser.
3. Add sample records and try search and delete.
4. Records are saved in the browser's local storage.

## 10. Conclusion
This project demonstrates basic system analysis and design through a clearly scoped problem, requirements, a proposed solution, interface design, and test plan. A future version could add authentication, a server-side application, and a database such as MySQL.

## Project files
- `index.html` — page structure and form
- `style.css` — responsive styling
- `script.js` — record management behavior
