import {Route,Routes,Navigate} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomPage from './pages/HomPage'
import LikesPage from './pages/LikesPage'
import SignUpPage from './pages/SignUpPage'
import ExplorePage from './pages/ExplorePage'
import Sidebar from './components/Sidebar'
import {Toaster} from "react-hot-toast"
import { useAuthContext } from './context/AuthContext'


function App() {
const {authUser,loading}= useAuthContext()
if(loading)return null;
  return (
      <div className=" flex text-white">
       <Sidebar/>
       <div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300  flex-1'>
        <Routes>
          <Route path="/" element={<HomPage/>}/>
          <Route path="/login" element={!authUser? <LoginPage/>:<Navigate to={'/'}></Navigate>}/>
          <Route path="/signup" element={!authUser?<SignUpPage/> :<Navigate to={'/'}></Navigate>}/>
          <Route path="/explore" element={authUser?<ExplorePage/>:<Navigate to='/login' />}/>
          <Route path="/likes" element={authUser?<LikesPage/>:<Navigate to='/login' />}/>

        </Routes>
        <Toaster/>
       </div>

      </div>
    
  )
}

export default App
