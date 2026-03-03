
import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import About from './pages/About'
import Services from './pages/Services'
import Home from './pages/Home'
import Contact from './pages/Contact'
import UserProfile from './pages/UserProfile'
import GreetUser from './components/GreetUser'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<MainLayout />}> {/*This is perform as a wrapper Router*/}
      <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='contact' element={<Contact />} />
        <Route path='greetuser' element={<GreetUser />} />
        <Route path='/userprofile/:userId?' element={<UserProfile />}></Route>
        <Route path='*' element={<h1>Page not Found...</h1>} ></Route>
      </Route>
     </Routes>
    </>
  )
}

export default App
