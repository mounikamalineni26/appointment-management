import React from 'react';
import './AppointmentList.css';

function AppointmentList({ appointments, onDelete, onEdit }) {
  return (
    <div className="list-container">
      <h2>Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments added yet.</p>
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
              <tr key={index}>
                <td>{index+1}</td>
                <td>{a.name}</td>
                <td>{a.date}</td>
                <td>{a.time}</td>
                <td>
                  <button onClick={() => onEdit(index)}>Edit</button>
                  <button onClick={() => onDelete(index)}>Delete</button>
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
