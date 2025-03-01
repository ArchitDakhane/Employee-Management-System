import React from 'react';
import { useEffect,useState } from 'react';
import { fetchEmployees, deleteEmployee, updateEmployee} from '../services/api';
import { useNavigate } from 'react-router-dom';


const ShowData = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();
    const handleEdit = (employee) => {
        navigate(`/edit/${employee.id}`);
    }

    const [editingEmployee,setEditingEmployee]=useState(null);
    const [editFormData,setEditFormData]=useState({
        name:'',
        email:'',
        password:'',
        department:''
    });

    useEffect(()=> {
        fetchEmployees()
        .then((data)=> {
            console.log("Setting Employees State", data);
            setEmployees(data);
        }).catch((error)=> {
            console.error(`Failed to fetch data: ${error}`);
        })
    },[]);

    const handleDelete = async (id) => {
        await deleteEmployee(id);
        setEmployees(employees.filter(emp => emp.id !== id));
        alert("Employee Deleted Successfully..!");
    }

  return (
    <>
    <section className='container mt-4'>
        <div className="card-header bg-gradient bg-primary text-white text-center py-3 mb-2">
          <h4 className="mb-0">Employee List</h4>
        </div>
      <table className='table table-hover table-striped table-bordered text-center'>
        <thead className='table-dark'>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Department</th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody>
            {employees.length > 0 ? ( 
                employees.map(emp => (
                <tr key={emp.id}>
                    <td>{emp.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.password}</td>
                    <td>{emp.department}</td>
                    <td>
                        <button 
                            className='btn btn-sm btn-warning me-2 px-3' onClick={()=>
                                handleEdit(emp)}>Edit
                        </button>
                        <button 
                            className='btn btn-sm btn-danger px-3' onClick={()=>
                            handleDelete(emp.id)}>Delete
                        </button> 
                    </td>
                </tr>
            ))) : (
                <div className="text-center p-4">
                    <h5 className='text-muted'>No Employees Found</h5>
                    <p className='text-secondary'>Add employees to view the list.</p>
                </div>
            )}
        </tbody>
      </table>
    </section>
    </>
  )
}

export default ShowData;
