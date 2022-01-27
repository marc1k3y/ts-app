import React, { FC } from "react"
import { IUser } from "../types/types"

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <div onClick={() => onClick(user)} style={{ padding: "10px", margin: "5px", border: "2px solid gray" }}>{user.id}. {user.username} tel: {user.phone}
      {user.address.city} to street {user.address.street}</div>
  )
}
export default UserItem