
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Config from '../pages/Config'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Panel from '../pages/Panel'
import SignIn from '../pages/SignIn'
import CreateStudent from '../pages/CreateStudent'
import CreateEnterprise from '../pages/CreateEnterprise'
import NotFound from '../pages/NotFound'
import SendOffer from '../components/SendOffer'
import Vermifoto from '../pages/vermifoto'
import DownloadCV from '../pages/DownloadCV'

const SendOfferWrapper = () => {
    const location = useLocation();
    const { state } = location;
    return <SendOffer {...state} />;
};

const AppRouter = () => {
  return (
            <Routes>
                <Route path='/home' element={<Home/>} />
                <Route path='/config' element={<Config/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='/panel' element={<Panel/>} />
                <Route path='/*' element={<NotFound/>} />
                <Route path='/' element={<Home/>} />
                <Route path='/signin' element={<SignIn/>} />
                <Route path='/createstudent' element={<CreateStudent/>} />
                <Route path='/createnterprise' element={<CreateEnterprise/>} />
                <Route path='/sendoffer' element={<SendOffer/>} />
                <Route path='/vermifoto' element={<Vermifoto/>} />
                <Route path='/downloadcv' element={<DownloadCV/>} />
            </Routes>
  )
}

export default AppRouter
