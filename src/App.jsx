import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Error from "./pages/Error";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Search from "./pages/Search";
import Leafshorts from "./pages/Leafshorts";
import Addmusic from "./pages/Addmusic";
import Account from "./pages/Account";




export default function App() {
  return (
   
    <BrowserRouter>
            <ToastContainer />
    <Routes>
    <Route  path="/login" element={<Login/>}/>
     <Route  path="/signup" element={<Signup/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="wishlist" element={<Wishlist/>}/>
     <Route path="/search" element={<Search/>}/>
     <Route path="/leafshorts" element={<Leafshorts/>}/>
     <Route path="/addmusic" element={<Addmusic/>}/>
     <Route path="/account" element={<Account/>}/>

     <Route  path="*" element={<Error/>}/>



    </Routes>
  </BrowserRouter>
  )
}
