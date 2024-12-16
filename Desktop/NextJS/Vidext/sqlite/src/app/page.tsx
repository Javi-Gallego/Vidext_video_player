"use client"

import { NavBar } from './_components/navbar'
import { Button } from './_components/ui/button'
import { Input } from './_components/ui/input'
import { useAuth } from './context/AuthContext'
import { useRouter } from 'next/navigation'

export const LoginPage = () => {
    const { isLoggedIn, login } = useAuth()
    const router = useRouter()

    const handleLogin = () => {
        login();
        router.push('/player')
    };

    return (
        <div className="container mx-auto bg-[#fafaf9]">

        <NavBar />

        {isLoggedIn ? (
            <p>You are already logged in.</p>
        ) : (
          <div className="flex flex-col space-y-4 w-1/4 mx-auto">
            <Input placeholder="Username" />
            <Input placeholder="Password" type="password" />
            <Button onClick={handleLogin}>Login</Button>
          </div>
        )}

        </div>
    )
}

export default LoginPage
