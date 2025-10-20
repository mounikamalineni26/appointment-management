import React, { useState } from 'react';
import AddAppointment from './components/AddAppointment';
import AppointmentList from './components/AppointmentList';
import './App.css';

function App() {
  const [appointments, setAppointments] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addAppointment = (appointment) => {
    if (editingIndex !== null) {
      // Update existing appointment
      const updated = [...appointments];
      updated[editingIndex] = appointment;
      setAppointments(updated);
      setEditingIndex(null);
    } else {
      // Add new appointment
      setAppointments([...appointments, appointment]);
    }
  };

  const deleteAppointment = (index) => {
    const updated = appointments.filter((_, i) => i !== index);
    setAppointments(updated);
    if (editingIndex === index) setEditingIndex(null); // stop editing if deleted
  };

  const editAppointment = (index) => {
    setEditingIndex(index);
  };

  return (
    <div className="app-container">
      <h1>Appointment Management System</h1>
      <AddAppointment
        onAdd={addAppointment}
        editingIndex={editingIndex}
        appointments={appointments}
      />
      <AppointmentList
        appointments={appointments}
        onDelete={deleteAppointment}
        onEdit={editAppointment}
      />
    </div>
  );
}

export default App;
