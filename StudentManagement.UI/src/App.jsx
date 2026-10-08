import { useEffect, useState } from "react";
import {
  getStudents,
  createStudent,
  deleteStudent,
} from "./services/studentService";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    phone: "",
  });

  const [message, setMessage] = useState("");

  const loadStudents = async () => {
    try {
      const response = await getStudents();
      setStudents(response.data);
    } catch (error) {
      console.error("Failed to load students:", error);
      setMessage("Failed to load students.");
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await createStudent(formData);

      setFormData({
        name: "",
        dateOfBirth: "",
        phone: "",
      });

      setMessage("Student added successfully.");

      await loadStudents();
    } catch (error) {
      console.error("Failed to create student:", error);
      setMessage("Failed to add student.");
    }
  };

 const handleDelete = async (id) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this student?"
  );

  if (!confirmed) {
    return;
  }

  try {
    await deleteStudent(id);

    setMessage("Student deleted successfully.");

    await loadStudents();
  } catch (error) {
    console.error("Failed to delete student:", error);
    setMessage("Failed to delete student.");
  }
};
  return (
    <div className="app-container">
      <h1>Student Management</h1>

      {message && (
        <div className="message">
          {message}
        </div>
      )}

      <div className="form-card">
        <h2>Add Student</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Date of Birth</label>

              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button className="add-button" type="submit">
            Add Student
          </button>
        </form>
      </div>

      <div>
        <h2>Students</h2>

        <div className="table-container">
          <table className="student-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>

                  <td>
                    {student.dateOfBirth.substring(0, 10)}
                  </td>

                  <td>{student.phone}</td>

                  <td>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;