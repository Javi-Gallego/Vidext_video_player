"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

interface AuthContextType {
  isLoggedIn: boolean
  login: (name:string, password:string) => Promise<void>
  logout: () => void
}

interface CustomJwtPayload {
  userId: string
  iat: number
  exp: number
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = async (name: string, password: string) => {
    try {
      const response = await axios.post("/api/login", { name, password })

      if (response.status === 200) {
        setIsLoggedIn(true)
        const decodedToken: CustomJwtPayload = jwtDecode(response.data.token)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('name', name)
        localStorage.setItem('userId', decodedToken.userId)
      } 
    } catch (error) {
      console.error('Login failed:', error)
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    localStorage.removeItem('userId')
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}