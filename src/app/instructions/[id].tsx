import { useParams, useRouter } from 'next/navigation'
import { NavBar } from '../_components/navbar'

const InstructionsPage = () => {
  const router = useRouter()
  const { id } = useParams()
  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center font-bold p-4">Instructions</div>
      <div className="flex justify-center items-center p-4">
        Oh, so you want to know the credentials for the user number {id}?
      </div>
      <div className="justify-center items-center p-1 bg-gray-200 font-bold">
        <div className="flex justify-center items-center p-1">
          Username: User{id}
        </div>
        <div className="flex justify-center items-center p-1">
          Password: 123456
        </div>
      </div>
      <div className="flex justify-center items-center p-4">
        Once you are logged in you will be redirected to the video player page
      </div>     
    </div>
  )
}

export default InstructionsPage