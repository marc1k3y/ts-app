import { Route, Routes } from "react-router-dom"
import UsersPage from "./components/UsersPage"
import TodosPage from "./components/TodosPage"
import { NavLink } from "react-router-dom"
import UserItemPage from "./components/UserItemPage"
import TodoItemPage from "./components/TodoItemPage"

export default function App() {
  return (
    <div className="App">
      <div>
        <NavLink to="/users">users</NavLink>
        <NavLink to="/todos">todos</NavLink>
      </div>
      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/users/:id" element={<UserItemPage />} />
        <Route path="/todos/:id" element={<TodoItemPage />} />
      </Routes>
    </div>
  )
}
