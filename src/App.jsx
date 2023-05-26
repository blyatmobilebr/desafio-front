import './App.css'
import Login from './pages/Login/Login';
import Produtos from './pages/Produtos/Produtos';
import SignUp from './pages/SignUp/SignUp';
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}>
        <Route path="/sign-in" element={<Login />} />
      </Route>

      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/produtos" element={<Produtos />} />


    </Routes>
  )
}

export default App