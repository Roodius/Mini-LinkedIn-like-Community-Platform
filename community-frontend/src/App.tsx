import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Signin } from './pages/SignIn'
import { Signup } from './pages/SignUp'
import { Dashboard } from './pages/Dashboard'
import { Createpost } from './pages/CreatePost'
import { AnimatePresence } from 'framer-motion'


function App() {
  
  return (
    <>
      <BrowserRouter>
      <AnimatePresence>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='signin' element={<Signin/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='createpost' element={<Createpost/>}/>
      </Routes>
      </AnimatePresence>
      </BrowserRouter>
    </>
  )
}

export default App
