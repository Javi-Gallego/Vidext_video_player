"use client"

import { useEffect, useState } from 'react'
import { NavBar } from './_components/navbar'
import { Button } from './_components/ui/button'
import { Input } from './_components/ui/input'
import { useAuth } from './context/AuthContext'
import { useRouter } from 'next/navigation'

export const LoginPage = () => {
    const { isLoggedIn, login } = useAuth()
    const router = useRouter()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (isLoggedIn) {
            router.push('/player')
        }
    }, [isLoggedIn])

    const handleLogin = async () => {
        await login(name, password)
    };

    return (
        <div className="container mx-auto bg-[#fafaf9] min-w-full min-h-screen">
          <NavBar />
          <div className="flex flex-col space-y-4 w-1/4 mx-auto p-8">
            <Input placeholder="Username" value={name} onChange={(e) => setName(e.target.value)}/>
            <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={handleLogin}>Login</Button>
          </div>
        </div>
    )
}

export default LoginPage
