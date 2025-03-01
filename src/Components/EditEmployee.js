import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const API_URL = "http://localhost:5000";

const EditEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        department: ''
    });

    useEffect(() => {
        // Fetch existing employee data
        const fetchEmployee = async()=> {
            const response = await fetch(`${API_URL}/employees/${id}`);
            if (response.ok) {
                const data = await response.json();
                setFormData(data);
            }
        };
        fetchEmployee();
    }, [id]);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`${API_URL}/employees/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        alert("Employee data updated Successfully");
        navigate('/showdata');
    };
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="card shadow-lg p-4 rounded" style={{ maxWidth: '500px', width: '100%' }}>
                <h3 className="text-center text-primary mb-3">Edit Employee</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label fw-bold">Name</label>
                        <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-bold">Email</label>
                        <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label fw-bold">Password</label>
                        <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="department" className="form-label fw-bold">Department</label>
                        <select className="form-select" name="department" value={formData.department} onChange={handleChange} required>
                            <option value="HR">HR</option>
                            <option value="Development">Development</option>
                            <option value="Support">Support</option>
                        </select>
                    </div>

                    <div className="d-flex justify-content-between">
                        <button className="btn btn-primary w-50 me-2" type="submit">Update</button>
                        <button className="btn btn-danger w-50" type="button" onClick={() => navigate("/showdata")}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default EditEmployee;