import React, { useState } from 'react';
import { registerUser } from '../services/api';

const Register = () => {
    const [form, setForm] = useState({ name: '', email: '', password: '', department: 'HR' });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await registerUser(form);
        alert('User registered successfully!');
    };

    return (
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow-lg p-4" style={{ maxWidth: '400px', width: '100%' }}>
          <h2 className="text-center mb-4 text-primary">Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name="name" className="form-control" placeholder="Enter Name" required onChange={handleChange} />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-control" placeholder="Enter Email" required onChange={handleChange} />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" name="password" className="form-control" placeholder="Enter Password" required onChange={handleChange} />
              </div>

              <div className="mb-3">
                <label className="form-label">Department</label>
                  <select name="department" className="form-select" onChange={handleChange}>
                    <option value="HR">HR</option>
                    <option value="Development">Development</option>
                    <option value="Support">Support</option>
                  </select>
              </div>

              <button className="btn btn-primary w-100" type="submit">Register</button>
            </form>
        </div>
      </div>
    );
};

export default Register;
