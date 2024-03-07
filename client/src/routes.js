import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login'
import App from './App'
import Register from './components/register'
import Profile from './components/profile'
import Knowus from './components/knowus'
import Blogs from './components/blogs'
import Bmi from './components/bmi'
import Ai from './components/ai'

import Weightlifting from './components/weightlifting'

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/GYM-WEBSITE/:userId" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/knowus" element={<Knowus />} />
        <Route path="/blogs/:userId" element={<Blogs />} />
        <Route path="/bmi" element={<Bmi />} />
        <Route path="/weightlifting" element={<Weightlifting />} />
        <Route path="/chat" element={<Ai />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default routes