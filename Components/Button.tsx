"use client"
import React from 'react'

function Button() {
    const handler=function(){
        console.log("hi there my name is shubham varshney")
    }
  return (
      <button
          type="submit"
          onClick={handler}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Sign In
        </button>
  )
}

export default Button