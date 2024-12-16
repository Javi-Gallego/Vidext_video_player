"use client"

import { useState } from 'react'
import { NavBar } from './_components/navbar'
import { Button } from './_components/ui/button'
import { Input } from './_components/ui/input'
import { useAuth } from './context/AuthContext'
import { useRouter } from 'next/navigation'
import bcrypt from 'bcryptjs'

export const LoginPage = () => {
    const { isLoggedIn, login } = useAuth()
    const router = useRouter()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
      const hashedPassword1 = await bcrypt.hash('123456', 10)
      console.log("contraseña hasheada: " + hashedPassword1)
        await login(name, password)
        if (isLoggedIn){
          router.push('/player')
        }
    };

    return (
        <div className="container mx-auto bg-[#fafaf9]">

        <NavBar />

        {isLoggedIn ? (
            <p>You are already logged in.</p>
        ) : (
          <div className="flex flex-col space-y-4 w-1/4 mx-auto">
            <Input placeholder="Username" value={name} onChange={(e) => setName(e.target.value)}/>
            <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={handleLogin}>Login</Button>
          </div>
        )}

        </div>
    )
}

export default LoginPage
