"use client"

import Link from 'next/link'
import { useAuth } from '../context/AuthContext'

export const NavBar = () => {
  const { isLoggedIn, logout } = useAuth()

  return (
    <nav className="flex w-full justify-between items-center p-3 bg-[#fafaf9] text-black">
      <div className="text-2xl font-bold tracking-tight sm:text-[3rem] text-black w-2/5">
            Vidext <span className="bg-[#c2f902] text-black rounded-full px-10">Player</span>
      </div>
      <div className="flex justify-start gap-4 w-1/2 text-black font-bold">
        {!isLoggedIn && <Link href="/">
          Login
        </Link>}
        {isLoggedIn && <Link href="/player">
          Player
        </Link>}
        <Link href="/instructions">
          Instructions
        </Link>
      </div>
      <div className="flex justify-end w-1/10">  
        {isLoggedIn && <button className="text-red-500 font-bold" onClick={logout}>Logout</button>}
      </div>
    </nav>
  )
}