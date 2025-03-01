const API_URL = "http://localhost:5000";

// Register a new user
export const registerUser = async (userData) => {
    const res = await fetch(`${API_URL}/employees`,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData),
    });
    return res.json();
};

// Login an existing user
export const loginUser = async (email,password) => {
    const res = await fetch(`${API_URL}/employees`);
    const users = await res.json();
    const user = users.find(user => user.email === email && user.password === password);  

    // token storage in local storage
    if (user) {
        const token = JSON.stringify({email:user.email});
        localStorage.setItem('token', token);
        return {success: true,token};
    } else {
        return {success: false};
    }
}

// fetch Employees
export const fetchEmployees = async () => {
    try {
        const response = await fetch("http://localhost:5000/employees");
        if(!response.ok) throw new Error('Failed to fetch Employees.');
        const data = await response.json();
        console.log("Fetched Employees:",data);
        return data;
        
    } catch (error) {
        console.error("API Error:", error);
        return[];
    }
}

// Add a new employee
export const addEmployee = async (employee) => {
    const res = await fetch(`${API_URL}/employees`,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
    });
    return res.json();
};

// Delete Employee
export const deleteEmployee = async (id) => {
    await fetch(`${API_URL}/employees/${id}`,{
        method: "DELETE",
    });
};

// Update Employee
export const updateEmployee = async (id, updatedData) => {
    await fetch(`${API_URL}/employees/${id}`,{
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    });
};