const form = document.getElementById("student-form");
const list = document.getElementById("student-list");
const search = document.getElementById("search");
const message = document.getElementById("message");
const emptyState = document.getElementById("empty-state");

let students = [];
try {
  students = JSON.parse(localStorage.getItem("csc317-students") || "[]");
} catch (error) {
  students = [];
}

function saveStudents() {
  localStorage.setItem("csc317-students", JSON.stringify(students));
}

function renderStudents() {
  const term = search.value.trim().toLowerCase();
  const filtered = students.filter(student =>
    student.id.toLowerCase().includes(term) ||
    student.name.toLowerCase().includes(term)
  );
  list.replaceChildren();
  emptyState.hidden = filtered.length > 0;

  filtered.forEach(student => {
    const row = document.createElement("tr");
    [student.id, student.name, student.department, student.level].forEach(value => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });
    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";
    deleteButton.type = "button";
    deleteButton.addEventListener("click", () => {
      students = students.filter(item => item.id !== student.id);
      saveStudents();
      renderStudents();
      message.textContent = "Student record deleted.";
    });
    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);
    list.appendChild(row);
  });
}

form.addEventListener("submit", event => {
  event.preventDefault();
  const student = {
    id: document.getElementById("student-id").value.trim(),
    name: document.getElementById("student-name").value.trim(),
    department: document.getElementById("student-department").value.trim(),
    level: document.getElementById("student-level").value
  };

  if (students.some(item => item.id.toLowerCase() === student.id.toLowerCase())) {
    message.textContent = "That matric number already exists.";
    return;
  }
  students.push(student);
  saveStudents();
  form.reset();
  message.textContent = "Student record saved successfully.";
  renderStudents();
});

search.addEventListener("input", renderStudents);
renderStudents();
