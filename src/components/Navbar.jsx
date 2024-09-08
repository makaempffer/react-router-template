import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)

    const closeMenu = () => {
        setIsOpen(false);
    }

    const closeProfileMenu = () => {
        console.log("Closing")
        if (isProfileOpen || isOpen) {
            closeMenu()
            setIsProfileOpen(false);
        }
        
    }
  
    return (
      <nav onClick={closeProfileMenu} className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="text-white text-lg font-semibold">Logo</Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink to="/" className={({ isActive }) => 
                    isActive ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : 
                    "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }>
                    Home
                  </NavLink>
                  <NavLink to="/about" className={({ isActive }) => 
                    isActive ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : 
                    "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }>
                    About
                  </NavLink>
                  <NavLink to="/pricing" className={({ isActive }) => 
                    isActive ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : 
                    "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }>
                    Pricing
                  </NavLink>
                  <NavLink to="/contact" className={({ isActive }) => 
                    isActive ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : 
                    "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }>
                    Contact
                  </NavLink>
                  <NavLink to="/dashboard" className={({ isActive }) => 
                    isActive ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : 
                    "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }>
                    Dashboard
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="ml-3 relative">
                  <div>
                    <button
                      className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      id="user-menu"
                      aria-haspopup="true"
                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </button>
                  </div>
                  {isProfileOpen && (
                    <div
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</Link>
                      <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Dashboard</Link>
                      <Link to="/signout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
  
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink to="/" onClick={closeMenu} className={({ isActive }) => 
                isActive ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" : 
                "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              }>
                Home
              </NavLink>
              <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => 
                isActive ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" : 
                "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              }>
                About
              </NavLink>
              <NavLink to="/pricing" onClick={closeMenu} className={({ isActive }) => 
                isActive ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" : 
                "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              }>
                Pricing
              </NavLink>
              <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => 
                isActive ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" : 
                "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              }>
                Contact
              </NavLink>
            </div>
            <div onClick={closeProfileMenu} className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">Tom Cook</div>
                  <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <Link to="/profile"  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</Link>
                <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Dashboard</Link>
                <Link to="/signout" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    )
  }