import Login from './pages/Login'
import {Routes,Route} from 'react-router-dom'
import Register from './pages/register'
import DashBaord from './pages/DashBaord'
import ForgotPassword from './pages/forgotPassword'
import Home from './pages/Home'
import Navbar from './components/Navbar'


function App() {
  
  return (
    <>
    <Navbar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />}/>
    <Route path="/dashboard" element={<DashBaord />} />
    <Route path="/forgotPassword" element={<ForgotPassword />} />
   </Routes>
   </>
  )
}

export default App
