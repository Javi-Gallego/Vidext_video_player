"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react'
import axios from 'axios'

interface AuthContextType {
  isLoggedIn: boolean
  login: (name:string, password:string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = async (name: string, password: string) => {
    try {
      console.log("llego aqui 1")
      //const response = await axios.post('../api/login', { name, password })
      const response = await axios.post("/api/login", { name, password })
      console.log("llego aqui 2")
      if (response.status === 200) {
        setIsLoggedIn(true)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('name', name)
      } else {
        console.error('NOT 200:', response.data.message)
      }
    } catch (error) {
      console.log("llego aqui 3")
      console.error('Login failed:', error)
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token')
    localStorage.removeItem('name')
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