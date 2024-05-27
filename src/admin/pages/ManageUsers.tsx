import React, { useEffect, useState } from "react";

interface ResponseAnswer {
  question: String,
  answer: number
}

interface ResponseSection {
  sectionTitle: String,
  answers: Record<number, ResponseAnswer>
}

interface Response {
  formTitle: String,
  responseSections: ResponseSection[]
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  type: string;
  responses: Response[]
}

const ManageUsers = () => {
  const [user, setUser] = useState<User>({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    type: "",
    responses: []
  });

  const [users, setUsers] = useState<User[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    fetch("http://localhost:8080/user/getAll")
    .then(res => res.json())
    .then((result: User[]) => {
      setUsers(result);
    })
    .catch(error => {
      console.error("Error fetching users:", error);
    });
  }, []);

  const addUser = () => {
    const newUser: User = { ...user };
    
    fetch("http://localhost:8080/user/create", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(newUser)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to add user. Server responded with status: " + response.status);
      }
      return response.json();
    })
    .then(data => {
      newUser.id = data.id; 
      setUsers([...users, newUser]);
    })
    .catch(error => {
      console.error("Error adding user:", error);
    });
  
    setUser({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      type: "",
      responses: []
    });
  };
  
  const deleteUser = (id: string) => {
    fetch("http://localhost:8080/user/delete/" + id, {
      method: "DELETE"
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to delete user. Server responded with status: " + response.status);
      }
      // Filter out the deleted user from the state
      setUsers(users.filter(user => user.id !== id));
      console.log(response);
    })
    .catch(error => {
      console.error("Error deleting user:", error);
    });
  };

  return (
    <div className="flex justify-center items-center bg-cover bg-center bg-main-building">
      <div className="text-gray-900 bg-gray-200">
        <div className="p-4 flex">
          <h1 className="text-2xl">Manage Users</h1>
        </div>
        <div className="px-3 py-4 flex justify-center">
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 px-5">First Name</th>
                <th className="text-left p-3 px-5">Last Name</th>
                <th className="text-left p-3 px-5">Email</th>
                <th className="text-left p-3 px-5">Password</th>
                <th className="text-left p-3 px-5">Role</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-orange-100 bg-gray-100">
                <td className="p-3 px-5">
                  <input type="text" name="firstName" placeholder="Enter First Name" className="bg-transparent border-b-2 border-gray-300 py-2" value={user.firstName} onChange={handleInputChange} />
                </td>
                <td className="p-3 px-5">
                  <input type="text" name="lastName" placeholder="Enter Last Name" className="bg-transparent border-b-2 border-gray-300 py-2" value={user.lastName} onChange={handleInputChange} />
                </td>
                <td className="p-3 px-5">
                  <input type="text" name="email" placeholder="Enter Email" className="bg-transparent border-b-2 border-gray-300 py-2" value={user.email} onChange={handleInputChange} />
                </td>
                <td className="p-3 px-5">
                  <input type="password" name="password" placeholder="Enter Password" className="bg-transparent border-b-2 border-gray-300 py-2" value={user.password} onChange={handleInputChange} />
                </td>
                <td className="p-3 px-5">
                <select name="type" value={user.type} className="bg-transparent border-b-2 border-gray-300 py-2" onChange={handleInputChange}>
                  <option value="USER">USER</option>
                  <option value="ADMIN">ADMIN</option>
                </select>
                </td>
                <td className="p-3 px-5 flex justify-end">
                  <button type="button" onClick={addUser} className="text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Add</button>
                </td>
              </tr>
              {users.map((user, index) => (
                <tr key={index} className="border-b hover:bg-orange-100 bg-gray-100">
                  <td className="p-3 px-5">{user.firstName}</td>
                  <td className="p-3 px-5">{user.lastName}</td>
                  <td className="p-3 px-5">{user.email}</td>
                  <td className="p-3 px-5">{user.password}</td>
                  <td className="p-3 px-5">{user.type}</td>
                  <td className="p-3 px-5 flex justify-end">
                    <button type="button" onClick={() => deleteUser(user.id)} className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Archive</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;