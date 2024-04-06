
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Config from '../pages/Config'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Messages from '../pages/Messages'

const AppRouter = () => {
  return (
            <Routes>
                <Route path='/home' element={<Home/>} />
                <Route path='/config' element={<Config/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='/messages' element={<Messages/>} />
                <Route path='/*' element={<h1>  404 </h1>} />
                <Route path='/' element={<Home/>} />
            </Routes>
  )
}

export default AppRouter
