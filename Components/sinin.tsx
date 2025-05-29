
import React from 'react'
import { FaUser, FaLock } from 'react-icons/fa'
import Button from '../Components/Button'

function sinin() {
    const handler =function(){
        console.log("hi there this side shubham vatrshney!");
        
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Sign In</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <div className="flex items-center border rounded-md">
            <FaUser className="text-gray-500 ml-3" />
            <input
              type="text"
              id="username"
              className="w-full py-2 px-4 outline-none"
              placeholder="Enter your username"
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <div className="flex items-center border rounded-md">
            <FaLock className="text-gray-500 ml-3" />
            <input
              type="password"
              id="password"
              className="w-full py-2 px-4 outline-none"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <Button/>
      </form>
      <p className="mt-4 text-center text-sm">
        Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
      </p>
    </div>
  </div>
  )
}

export default sinin