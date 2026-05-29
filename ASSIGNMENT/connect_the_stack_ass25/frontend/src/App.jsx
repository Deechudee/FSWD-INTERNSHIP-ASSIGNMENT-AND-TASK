import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        setError(null)

        const res = await axios.get('http://localhost:5000/users')
        setUsers(res.data)
      } catch (err) {
        setError(err?.message ?? 'Failed to fetch users')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 24 }}>
      <h1>User List</h1>

      {loading && <p>Loading...</p>}

      {error && (
        <p style={{ color: 'crimson', fontWeight: 600 }}>
          Error: {error}
        </p>
      )}

      {!loading && !error && (
        <ul>
          {users.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
