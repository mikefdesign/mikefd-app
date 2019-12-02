import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Users = () => {
  let [users, setUsers] = useState([])
  let usersResp

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    try {
      usersResp = await axios({
        url: 'https://api.mikefdesign.com/api/v1/users',
        method: 'GET',
        headers: {
          'authentication-key': '12345'
        }
      })
      setUsers(usersResp.data)
    }
    catch (err) {
      console.log('users error: ', err)
    }
  }

  return (
    <div>
      <h2>Users</h2>
      {users.map(user => (
        <div
          key={user.id}>{user.first_name} {user.last_name} - {user.email}</div>
      ))}
    </div>
  )
}

export default Users
