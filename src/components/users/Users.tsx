import { useState, useEffect } from 'react'
import { UserPropsTypes } from './user.types'
import { USERS_TEXT, ERROR_TEXT } from './users.constants'
import { USER_LIST } from './url'
export const Users = () => {
  const [users, setUsers] = useState<UserPropsTypes[]>([])
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    fetch(USER_LIST)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
      })
      .catch((err) => {
        setError(ERROR_TEXT)
      })
  }, [])
  return (
    <div>
      <h1>{USERS_TEXT}</h1>
      {users && (
        <ul>
          {users.map((user) => {
            return <li key={user.id}>{user.name}</li>
          })}
        </ul>
      )}
      {error && <div>{error}</div>}
    </div>
  )
}
