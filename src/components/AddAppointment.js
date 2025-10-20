import React, { useState, useEffect } from 'react';
import './AddAppointment.css';

function AddAppointment({ onAdd, editingIndex, appointments }) {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: ''
  });

  // Populate form when editing
  useEffect(() => {
    if (editingIndex !== null) {
      setFormData(appointments[editingIndex]);
    } else {
      setFormData({ name: '', date: '', time: '' });
    }
  }, [editingIndex, appointments]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.date || !formData.time) {
      alert('Please fill all required fields');
      return;
    }
    onAdd(formData);
    setFormData({ name: '', date: '', time: '' }); // reset form after submit
  };

  return (
    <div className="add-form">
      <h2>{editingIndex !== null ? 'Edit Appointment' : 'Add Appointment'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Patient Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <button className="add-btn" type="submit">
  {editingIndex !== null ? 'Update' : 'Add'}
</button>

      </form>
    </div>
  );
}

export default AddAppointment;
