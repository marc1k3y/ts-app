import axios from "axios"
import { FC, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { IUser } from "../types/types"

const UserItemPage: FC = () => {
  const { pathname } = useLocation()
  const uid = pathname.split("/")[2]
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    fetchUser()
  }, [])

  async function fetchUser() {
    const res = await axios.get<IUser | null>("https://jsonplaceholder.typicode.com/users/" + uid)
    setUser(res.data)
  }
  return (
    <div>
      <button>Back</button>
      <h1>User page {user?.name}</h1>
      <div>
        {user?.address.city} {user?.address.street} {user?.email}
      </div>
    </div>
  )
}
export default UserItemPage