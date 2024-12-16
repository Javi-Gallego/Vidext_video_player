import { NavBar } from '../_components/navbar'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const PlayerPage = () => {
  const { isLoggedIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/')
    }
  }, [isLoggedIn, router])

  return (
    <div>
      <NavBar />
      <h1>Player Page</h1>
      {/* Aquí puedes agregar tu componente de reproductor de videos */}
    </div>
  )
}

export default PlayerPage