import { Route, Routes } from 'react-router-dom';
import './App.css'
import EditarPerfil from './pages/EditarPerfil/EditarPerfil';
import Perfil from './pages/Perfil/Perfil';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Produtos from './pages/Produtos/Produtos';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import AdicionarProdutos from './pages/AdicionarProdutos/AdicionarProdutos';
import EditarProduto from './pages/EditarProduto/EditarProduto';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />}>
        <Route path="/sign-in" element={<Login />} />
      </Route>
      
      <Route path="/usuarios" element={<SignUp />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/produtos/novo" element={<AdicionarProdutos />} />
      <Route path="/produtos/editar" element={<EditarProduto />} /> 
      <Route path="/perfil/editar" element={<EditarPerfil />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </>
  )
}

export default App