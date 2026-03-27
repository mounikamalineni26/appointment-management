import React from 'react';
import './AppointmentList.css';

function AppointmentList({ appointments, onDelete, onEdit }) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="list-container">
      <h2>Appointments</h2>

      {/* Total Count */}
      <p>Total: {appointments.length}</p>

      {appointments.length === 0 ? (
        <p className="empty">No appointments found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((a, index) => (
              <tr key={a.id || index}>

                <td data-label="ID">{index + 1}</td>

                <td data-label="Name">{a.name}</td>

                {/* Today Highlight */}
                <td
                  data-label="Date"
                  style={{
                    color: a.date === today ? "#10b981" : "#111827",
                    fontWeight: a.date === today ? "600" : "normal"
                  }}
                >
                  {a.date} {a.date === today && " (Today)"}
                </td>

                <td data-label="Time">{a.time}</td>

                <td data-label="Action">
                  <button
                    className="edit-btn"
                    onClick={() => onEdit(index)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => {
                      if (window.confirm("Are you sure?")) {
                        onDelete(index);
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AppointmentList;