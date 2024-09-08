import React from 'react'
import "./App.css"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Pricing } from './components/Pricing'
import { Contact } from './components/Contact'
import { Navbar } from './components/Navbar'
import { Dashboard } from './components/Dashboard'

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signout" element={<SignOut />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

function Profile() {
  return <h2>Your Profile</h2>
}

function SignOut() {
  return <h2>Sign Out</h2>
}