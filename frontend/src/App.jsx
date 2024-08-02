import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                setError(error.message);
                console.log(error.config);
            });
    }, []);
    return (
        <>
            {error && <p>Error: {error}</p>}
            {console.log(users)}
            {users.map((user) => (
                <div key={user.id}>
                    <p>This is the user: {user.name}</p>
                    <p>This is the age: {user.age}</p>
                </div>
            ))}
            {users.length === 0 && <p>No users found.</p>}
        </>
    );
}
export default App;

//What did I use here
//1. useState 2. useEffect 3. Conditional rendering
// Read on them properly