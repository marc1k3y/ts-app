import axios from "axios"
import { FC, useEffect, useState } from "react"
import { IUser } from "../types/types"
import List from "./List"
import UserItem from "./UserItem"

const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    const res = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
    setUsers(res.data)
  }
  return (
    <List
      items={users}
      renderItem={(user: IUser) => <UserItem onClick={() => console.log('ops')} user={user} key={user.id} />} />
  )
}

export default UsersPage