"use client"

import { useRouter } from 'next/navigation'
import { NavBar } from '../_components/navbar'

const InstructionsPage = () => {
  const router = useRouter()

  const handleClick = (id: number) => {
    router.push(`/instructions/${id}`)
  }

  return (
    <div className="bg-[#fafaf9] h-screen">
      <NavBar />
      <div className="flex justify-center items-center font-bold p-4">Instructions</div>
      <div className="flex justify-center items-center p-4">
        Unfortunately we did not have enough time to make a proper register page so if you want to use our free player you must use this credentials just as the Readme says
      </div>
      <div className="justify-center items-center p-1 bg-gray-200 font-bold">
        <div className="flex justify-center items-center p-1">
          Username: Vidext
        </div>
        <div className="flex justify-center items-center p-1">
          Password: 123456
        </div>
      </div>
      <div className="flex justify-center items-center p-4">
        Once you are logged in you will be redirected to the video player page
      </div>
      <div className="flex justify-center items-center p-4">
        If you want to use other users credentials you can click on the user you want
      </div>
      <div className="flex justify-center items-center p-4 space-x-5">
        <div className="cursor-pointer font-bold" onClick={ () => handleClick(1)}>User 1</div>
        <div className="cursor-pointer font-bold" onClick={ () => handleClick(2)}>User 2</div>
        <div className="cursor-pointer font-bold" onClick={ () => handleClick(3)}>User 3</div>
        <div className="cursor-pointer font-bold" onClick={ () => handleClick(4)}>User 4</div>
        <div className="cursor-pointer font-bold" onClick={ () => handleClick(5)}>User 5</div>
      </div>
    </div>
  )
}

export default InstructionsPage