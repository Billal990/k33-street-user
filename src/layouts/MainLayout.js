import Header from '../shared/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MainLayout() {
  return (
    <div>
        <Header/>
       <div className='bg-[#F7F4F2] min-h-screen'><Outlet/></div>
        <Footer/>
        <ToastContainer/>
    </div>
  )
}
