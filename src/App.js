import React, { useState, useEffect } from 'react';
import AddAppointment from './components/AddAppointment';
import AppointmentList from './components/AppointmentList';
import './App.css';

function App() {

  // 🔥 Load from localStorage
  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem("appointments");
    return saved ? JSON.parse(saved) : [];
  });

  const [editingIndex, setEditingIndex] = useState(null);

  // 🔍 Search state
  const [search, setSearch] = useState("");

  // 🔥 Save to localStorage
  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  // 🔍 Filter logic
  const filteredAppointments = appointments.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase())
  );

  const addAppointment = (appointment) => {
    if (editingIndex !== null) {
      const updated = [...appointments];
      updated[editingIndex] = appointment;
      setAppointments(updated);
      setEditingIndex(null);
    } else {
      setAppointments([
        ...appointments,
        { ...appointment, id: Date.now() }
      ]);
    }
  };

  const deleteAppointment = (index) => {
    const updated = appointments.filter((_, i) => i !== index);
    setAppointments(updated);
    if (editingIndex === index) setEditingIndex(null);
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

      {/* 🔍 SEARCH INPUT */}
      <input
        type="text"
        placeholder="Search by patient name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      <AppointmentList
        appointments={filteredAppointments} // 🔥 filtered data
        onDelete={deleteAppointment}
        onEdit={editAppointment}
      />
    </div>
  );
}

export default App;